import './App.css';
import { useState } from 'react'

const data = [
  { name: 'Item A', price: 125 },
  { name: 'Item B', price: 230 },
  { name: 'Item C', price: 295 },
  { name: 'Item D', price: 245 },
  { name: 'Item E', price: 900 },
  { name: 'Item F', price: 875 },
  { name: 'Item G', price: 235 },
  { name: 'Item H', price: 400 },
];

function App() {

  const lowToHighProds = data.sort((a,b) => {
    if(a.price > b.price){
      return 1
    } else {
      return -1
    }
  }).map((prod) => {
    return prod
  })

  const firstFiveProds = lowToHighProds.slice(0,5)
  const [products,setProducts] = useState(firstFiveProds)
  const [buttonText,setButtonText] = useState('View All')
  const newButtonText = buttonText === 'View All' ? 'Collapse' : 'View All'

  const handleClick = () => {
    setButtonText(newButtonText)

    if(buttonText === 'Collapse') {
      setProducts(firstFiveProds)
    } else if(buttonText === 'View All') {
      setProducts(lowToHighProds)
    }
    
  }

  return (
   <div className="container">
   <button onClick={handleClick}>{buttonText}</button>
   <ul aria-label="products-list">
     {products.map((prod) => {
       return (
         <li key={prod.name}>
           <p>{prod.name}</p>
           <p>£{prod.price}</p>
         </li>
       )
     })}
   </ul>
   </div>
  );
}

export default App;
