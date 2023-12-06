import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import tempMovieData from "./Components/TempMovieData";
import tempWatchedData from "./Components/TempWatchedData";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  useEffect(() => {
    setMovies(tempMovieData);
  }, []);
  useEffect(() => {
    setWatched(tempWatchedData);
  }, []);
  return (
    <>
      <Navbar movies={movies} />
      <Main
        movies={movies}
        watched={watched}
        isOpen1={isOpen1}
        isOpen2={isOpen2}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
        setIsOpen1={() => setIsOpen1((open) => !open)}
        setIsOpen2={() => setIsOpen2((open) => !open)}
      />
    </>
  );
}
