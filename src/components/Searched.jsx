import React from "react";
import MovieResult from "./MovieResult";

export default function Searched({ movies, onResults }) {
  return (
    <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-4">
      {movies.length === 0 ? (
        <h1 className="font-bold text-yellow-700 text-2xl">
          No movie searched yet...
        </h1>
      ) : (
        movies.map((movie) => (
          <MovieResult key={movie.id} onResults={onResults} movie={movie} />
        ))
      )}
    </div>
  );
}
