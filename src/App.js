const Button = () =>{
  const handleClick= (a,b) =>{
    console.log(a+b);
  }
  return <button onClick={handleClick(2,2)}>Click</button>
}
function App() {
  return (
    <>
    <Button />

    </>
  );
}


export default App;
