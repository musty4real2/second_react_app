// import Add from "./components/Add";
// import Greetings from "./components/Greetings";

const myName='Mustapha WebDev';
const multiply =(a,b)=>a*b;
const specialClass='simple-class';

function App() {
  return (
    <>
    <h1>Welcome, I am {myName}</h1>
    <p>2*2 = {2*2}</p>
    <p>My Friends List {['Suleiman','Attahiru','Alpha Tee','Ahmed ']}</p>
    <p>2*2= {multiply(2,2)}</p>
    <p className={specialClass}>Testing class name assignment </p>
    </>
    
  );
}

export default App;
