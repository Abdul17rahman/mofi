import React from "react";

export default function MovieInfo({ movie }) {
  return (
    <div className="overflow-hidden shadow-lg flex flex-row items-start">
      <div className="max-w-sm m-5">
        <img
          className="w-full rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </div>

      <div className="px-4 mt-5 pb-2 ">
        <h1 className="font-bold text-xl">{movie.title}</h1>
        <p className="text-sm mb-2 text-gray-500">({movie.tagline})</p>
        <p className="inline-block px-2 rounded text-pink-700 ring-1 ring-pink-700/10 ring-inset bg-pink-50">
          {movie.runtime} min
        </p>
        <h2 className="font-bold mb-2">Overview:</h2>

        <p>{movie.overview}</p>

        <p className="my-3">
          <span className="font-bold">Date:</span> {movie.release_date}
        </p>

        <div className="mb-4">
          <span className="font-bold">Genres:</span>
          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset bg-purple-50"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <p>
          <span className="font-bold">Stats:</span>
        </p>
        <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-red-700 ring-1 ring-red-700/10 ring-inset bg-red-50">
          Budget: ${movie.budget}
        </span>
        <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-green-700 ring-1 ring-green-700/10 ring-inset bg-green-50">
          Revenue: ${movie.revenue}
        </span>
        <p className="mt-1">
          <span className="font-bold">Status:</span>{" "}
          <span
            className={
              movie.status === "Released"
                ? "inline-flex items-center rounded bg-green-50 px-2 py-1 mr-3 text-xs font-medium text-green-700 ring-1 ring-green-700/10 ring-inset"
                : "inline-flex items-center rounded bg-red-50 px-2 py-1 mr-3 text-xs font-medium text-red-700 ring-1 ring-red-700/10 ring-inset"
            }
          >
            {movie.status}
          </span>
        </p>
      </div>
    </div>
  );
}
