import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

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
        <NavLink to={`/moviedetail/${movie.id}`}>
          <Button value={"View"} />
        </NavLink>
        <div className="px-4 pt-4 pb-2">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-pink-700 ring-1 ring-pink-700/10 ring-inset bg-pink-50">
            Vote Count: {movie.vote_count}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-700 ring-1 ring-purple-700/10 ring-inset bg-purple-50">
            Vote Avg: {movie.vote_average}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 rounded text-green-700 ring-1 ring-green-700/10 ring-inset bg-green-50">
            Popularity Score: {Math.floor(movie.popularity)}
          </span>
        </div>
      </div>
    </>
  );
}
