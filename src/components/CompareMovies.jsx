import React, { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo";
import axios from "axios";
import { options } from "../utils";

export default function CompareMovies({ movie1, movie2 }) {
  const [compMovie1, setCompMovie1] = useState({});
  const [compMovie2, setCompMovie2] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movie1}`;
        const response = await axios.get(url, options);
        setCompMovie1(response.data);
      } catch (error) {
        console.error(`Error occured ${error}`);
      }
    };
    getMovie();
  }, [movie1]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movie2}`;
        const response = await axios.get(url, options);
        setCompMovie2(response.data);
      } catch (error) {
        console.error(`Error occured ${error}`);
      }
    };
    getMovie();
  }, [movie2]);

  return (
    <div>
      <div className="my-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1">
        <MovieInfo movie={compMovie1} />
        <MovieInfo movie={compMovie2} />
      </div>
    </div>
  );
}
