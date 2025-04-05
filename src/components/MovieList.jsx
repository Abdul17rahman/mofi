import React, { useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import useMovieStore from "../store/movieStore";
import { options } from "../utils";

export default function MovieList({ filter }) {
  const movies = useMovieStore((state) => state.movies);
  const setmovies = useMovieStore((state) => state.setmovies);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // let url = `https://api.watchmode.com/v1/releases/?apiKey=${KEY}`;
        // let url = `http://www.omdbapi.com/?apikey=70449a&s=movie&y=2024&page=${ page }`;

        const url = `https://api.themoviedb.org/3/movie/${filter}?language=en-US&page=1`;

        const response = await axios.get(url, options);
        const { data } = response;
        setmovies(data.results);
      } catch (error) {
        console.error(`Error in fetching data ${error}`);
      }
    };

    getMovies();
  }, [filter]);

  return (
    <>
      <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-4 justify-items-center items-center">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
