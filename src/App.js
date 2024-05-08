import { useState } from "react";
const Counter =() =>{
  const [count, setCount] =useState(0);

  const increase=() => {
    setCount(count + 1);
  }
  const decrease=() => {
    setCount(count - 1);
  }

  return <>
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
  </>
}
function App() {
  return (
    <>
  <Counter />
    </>
  );
}


export default App;
