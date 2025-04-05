import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { options } from "../utils";
import Loader from "../components/Loader";
import MovieInfo from "../components/MovieInfo";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const response = await axios.get(url, options);
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.error(`Error occured ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [id]);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && <MovieInfo movie={movie} />}
    </div>
  );
}
