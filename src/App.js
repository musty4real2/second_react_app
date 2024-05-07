const Movie = () =>{
  const moveHandler= () =>{
    console.log('You hovered over my content');
  };
  return (
    <>
      <p onMouseMove={moveHandler}>something </p>
    </>
  );
}
function App() {
  return (
    <>
    <Movie/>
    </>
  );
}


export default App;
