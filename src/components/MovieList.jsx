import React, { useState } from "react";
import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = useState(new Array(12).fill(""));
  console.log(movies);
  return (
    <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-4">
      {movies.map((m, idx) => (
        <Movie key={idx} />
      ))}
    </div>
  );
}
