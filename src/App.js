import "./index.css";
const Cart = () =>{
  const items=['Wireless','Power Bank',' New SSD','Hoodies'];
  const dStyle= {
    color:"white",
    backgroundColor:"crimson",
    padding:"6rem"
  }

  return <>
    <h1 className="underline decoration-pink-500">
      Hello world!
    </h1>
<h1>Cart</h1>
{/* {items.length > 0 &&  */}
  {/* <h2 style={{color:"white",backgroundColor:"teal",padding:"2rem"}}>You have {items.length} items in your cart</h2>

    <h2 style={{color:dStyle.color,backgroundColor:dStyle.backgroundColor,padding:dStyle.padding}}>You have {items.length} items in your cart</h2>}
   */}

{items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

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
