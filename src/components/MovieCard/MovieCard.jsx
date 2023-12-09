import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div>
      <Link to={`movies/${movie.title}`}>
        <img src={movie.posterPath} />
      </Link>
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
    </div>
  );
}
