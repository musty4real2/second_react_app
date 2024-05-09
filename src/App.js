import { useState } from "react";
function App() {
  const [movie, setMovie] = useState({ title: "Equalizer", year: 2024, rating: 7 });

  const changeRating = () => {
    const copyMovie = {
      ...movie,
      rating: 6,
    }

    setMovie(copyMovie);
  };
  
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.year}</p> {/* Display the year instead of title */}
      <button onClick={changeRating}>Change Ratings</button>
    </>
  );
}


export default App;
