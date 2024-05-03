const Cart = () =>{
  const items=['Wireless','Power Bank',' New SSD','Hoodies'];

  return <>
<h1>Cart</h1>
{items.length > 0 && 
  <h2>You have {items.length} items in your cart</h2>
}
  <ul>
    <h4>Products</h4>
    {items.map((item => (
      <li key={Math.random()}>{item}</li>
    )))}
  </ul>  
  </> 
  }
function App() {
  return (
    <>
    <Cart />  
    </>
  );
}


export default App;
