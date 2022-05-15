import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Button unclicked', () => {
  it('renders button correctly', () => {
    render(<App />);

    const button = screen.getByRole('button', {name: 'View All'})
    expect(button.textContent).toBe('View All')
  });
  
  it('renders data correctly', () => {
    render(<App />)

    const productList = screen.getByRole('list', {
      name: /products/i,
    })
  
    expect(productList).toMatchSnapshot()
  })
})

describe('Button clicked', () => {
  it('renders button correctly when clicked', () => {
    render(<App/>);

    const button = screen.getByRole('button', {name: 'View All'})
    expect(button.textContent).toBe('View All')

    fireEvent.click(button)
    expect(button.textContent).toBe('Collapse')
  });
  
  it('renders data correctly when clicked', () => {
    render(<App />)

    const productList = screen.getByRole('list', {
      name: /products/i,
    })

    const button = screen.getByRole('button', {name: 'View All'})
    fireEvent.click(button)
    expect(productList).toMatchSnapshot()
  })
})




