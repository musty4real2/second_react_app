import { useState } from "react";
// const Counter =() =>{
//   const [count, setCount] =useState(0);

//   const increase=() => {
//     setCount(count + 1);
//   }
//   const decrease=() => {
//     setCount(count - 1);
//   }

function App() {
  const [username, setUsername] =useState(["Alex","Iwobi"]);
  return (
    <>
    {username.map((f) => (
      <li key={Math.random()}>{f}</li>
    ))}
    </>
  );
}


export default App;
