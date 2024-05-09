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

  const addOne= () =>{
    setUsername([...username,"Mudassir"]);
  }
  const removeOne= () =>{
    setUsername(username.filter((f) => f !=="Musty"));
  }
  const updateOne= () =>{
    setUsername(username.map((f)=> (f === 'Alex' ? 'Alex Smith': f)));
  }
  return (
    <>
    {username.map((f) => (
      <li key={Math.random()}>{f}</li>
    ))}

    <button onClick={addOne}> Add One</button>
    <button onClick={removeOne}> Remove One</button>
    {/* <button onClick={updateOne}> Update One</button> */}
    </>
  );
}


export default App;
