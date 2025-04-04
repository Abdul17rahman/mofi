import React, { useState } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";

export default function Home() {
  const [filter, setFilter] = useState("popular");

  function handleFilter(value) {
    setFilter(value);
  }
  console.log(filter);
  return (
    <div>
      <h1 className="font-mono text-3xl font-bold">
        {filter === "popular"
          ? "Popular"
          : filter === "now_playing"
          ? "Now Playing"
          : filter === "top_rated"
          ? "Top Rated"
          : filter === "upcoming"
          ? "Upcoming"
          : "Movies"}{" "}
        Movies
      </h1>
      <Filter onFilter={handleFilter} />
      <MovieList filter={filter} />
    </div>
  );
}
