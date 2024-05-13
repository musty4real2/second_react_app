import { useState } from "react";
function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Equalizer", year: 2024, rating: 7 },
    { id: 2, title: "Spiderman", year: 2009, rating: 2 },
    { id: 3, title: "Immortals", year: 1999, rating: 4 }
]);

  // const changeRating = () => {
  //   // const copyMovie = {...movie,rating: 6,}

  //   setMovie({...movie,rating: 6,});
  // };
  
  const handleClick = () => {
    setMovies(movies.map(m => (m.id === 1 ? { ...movies, title: "John Wick 4 " } : m)));
  };
  return (
    <>
      {movies.map(movie => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  );
}


export default App;
