import React from "react";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <div>
      <h1 className="font-mono text-3xl font-bold">Latest Movies</h1>
      <MovieList />
    </div>
  );
}
