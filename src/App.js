import { useState } from "react";
function App() {
  const [movies, setMovies] = useState(
    { id: 1, title: "Equalizer", year: 2024, rating: 7 },
    { id: 2, title: "Spiderman", year: 2009, rating: 2 },
    { id: 3, title: "Immortals", year: 1999, rating: 4 },
  );

  // const changeRating = () => {
  //   // const copyMovie = {...movie,rating: 6,}

  //   setMovie({...movie,rating: 6,});
  // };
  
  return (
    <>
      {movies.map(movie => (
        <li>{movie.title}</li>
      ))}
    
      {/* <h1>{movie.title}</h1> */}
      {/* <p>{movie.year}</p> Display the year instead of title */}
      {/* <p>{movie.rating}</p> */}
      {/* <button onClick={changeRating}>Change Ratings</button> */}
    </>
  );
}


export default App;
