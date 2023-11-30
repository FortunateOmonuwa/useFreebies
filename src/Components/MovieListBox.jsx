import MovieList from "./MovieList";
const MovieListBox = ({ movies, onClick, isOpen1 }) => {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onClick}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default MovieListBox;
