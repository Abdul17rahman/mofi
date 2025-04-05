import React from "react";
import Movie from "./Movie";

export default function CompareMovies({ movie1, movie2 }) {
  console.log(movie1, movie2);
  return (
    <div>
      <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-4">
        <Movie movie={movie1} />
        <Movie movie={movie2} />
      </div>
    </div>
  );
}
