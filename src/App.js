const Button = () =>{
  const handleClick= () =>{
    console.log("Button Clicked");
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
