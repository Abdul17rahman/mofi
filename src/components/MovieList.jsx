import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import useMovieStore from "../store/movieStore";

export default function MovieList({ filter }) {
  const movies = useMovieStore((state) => state.movies);
  const setmovies = useMovieStore((state) => state.setmovies);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const token = import.meta.env.VITE_TOKEN;
        // let url = `https://api.watchmode.com/v1/releases/?apiKey=${KEY}`;
        // let url = `http://www.omdbapi.com/?apikey=70449a&s=movie&y=2024&page=${ page }`;

        const url = `https://api.themoviedb.org/3/movie/${filter}?language=en-US&page=1`;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(url, options);
        const { data } = response;
        console.log(data.results);
        setmovies(data.results);
      } catch (error) {
        console.error(`Error in fetching data ${error}`);
      }
    };

    getMovies();
  }, [filter]);

  return (
    <>
      <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-4">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      {/* <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Prev
        </button>
        <span className="flex items-center justify-center">{`Page ${page}`}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div> */}
    </>
  );
}
