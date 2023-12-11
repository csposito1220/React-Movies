import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data";

export default function MovieDetailPage() {
  let { movieName } = useParams();
  let selectedMovie = movies.find((m) => m.title == movieName);

  return (
    <div>
      <MovieCard movie={selectedMovie} />
      <h4>Cast: {selectedMovie.cast.join(", ")}</h4>
    </div>
  );
}
