import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import useMovieStore from "../store/movieStore";

export default function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const setmovies = useMovieStore((state) => state.setmovies);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const KEY = import.meta.env.VITE_API_KEY;
        let url = `https://api.watchmode.com/v1/releases/?apiKey=${KEY}&limit=12`;

        const response = await axios.get(url);
        console.log(response);
        setmovies(response.data);
      } catch (error) {
        console.error("Error fetching");
      }
    };

    getMovies();
  }, [setmovies]);

  return (
    <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-4">
      {movies.map((m, idx) => (
        <Movie key={idx} />
      ))}
    </div>
  );
}
