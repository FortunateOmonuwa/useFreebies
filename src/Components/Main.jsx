import MovieListBox from "./MovieListBox";
import Watched from "./Watched";
const Main = ({
  movies,
  watched,
  isOpen1,
  isOpen2,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  setIsOpen1,
  setIsOpen2,
}) => {
  return (
    <main className="main">
      <MovieListBox movies={movies} onClick={setIsOpen1} isOpen1={isOpen1} />
      <Watched
        onClick={setIsOpen2}
        isOpen2={isOpen2}
        avgImdbRating={avgImdbRating}
        avgRuntime={avgRuntime}
        avgUserRating={avgUserRating}
        watched={watched}
      />
    </main>
  );
};

export default Main;
