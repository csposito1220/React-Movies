import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <>
      <h1>MoviesListPage</h1>
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </>
  );
}
