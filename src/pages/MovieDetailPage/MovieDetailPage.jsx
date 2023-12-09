import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data";

export default function MovieDetailPage() {
  let { movieName } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let selectedMovie = movies.find((m) => m.title == movieName);
    setMovie(selectedMovie);
  }, [movies, movieName]);

  return (
    <div>
      <MovieCard movie={movie} />
      <h4>Cast: {movie.cast?.join(", ")}</h4>
    </div>
  );
}
