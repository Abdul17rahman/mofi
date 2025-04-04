import React from "react";
import Button from "./Button";

export default function Movie({ movie }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="px-6 pt-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>

          <p className="text-gray-700 text-base">
            Release: {movie.release_date}
          </p>
        </div>
        <Button value={"View"} />
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Vote Count: {movie.vote_count}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Vote Avg: {movie.vote_average}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Popularity Score: {Math.floor(movie.popularity)}
          </span>
        </div>
      </div>
    </>
  );
}
