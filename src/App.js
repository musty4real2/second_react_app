const Button = () =>{
  const handleClick= () =>{
    alert("You Clicked Mehhhhhhhh");
  }
  return <button onClick={handleClick}>Click</button>
}
function App() {
  return (
    <>
    <Button />

    </>
  );
}


export default App;
