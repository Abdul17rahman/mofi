import React from "react";

export default function MovieResult({ movie, onResults }) {
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
        </div>
        <p className="text-sm px-6">
          {" "}
          <span className="font-bold block pb-2">Overview:</span>
          {movie.overview}
        </p>
        <div className="px-6 py-2">
          <button
            className="bg-primary hover:bg-blue-800 cursor-pointer text-green-200 text-md px-2 py-1 rounded"
            onClick={() => onResults(movie.id)}
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
}
