import Movie from "./Movie";
const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
