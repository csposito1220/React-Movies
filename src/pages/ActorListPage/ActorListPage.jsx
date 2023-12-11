import ActorCard from "../../components/ActorCard/ActorCard";
import { movies } from "../../data";
import { useState } from "react";
import { useEffect } from "react";

const actorArray = [];

export default function ActorListPage() {
  const [uniqueActors, setUniqueActors] = useState([]);

  useEffect(() => {
    const uniqueActorsSet = new Set();

    movies.forEach((movie) => {
      movie.cast.forEach((actor) => {
        uniqueActorsSet.add(actor);
      });
    });

    setUniqueActors(Array.from(uniqueActorsSet));
  }, []);

  return (
    <>
      <h1>
        {uniqueActors.map((actor) => {
          return <ActorCard key={actor} actor={actor} />;
        })}
      </h1>
    </>
  );
}
