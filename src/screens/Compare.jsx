import { useEffect, useState } from "react";
import Search from "../components/Search";
import CompareMovies from "../components/CompareMovies";
import Searched from "../components/Searched";
import axios from "axios";
import { options } from "../utils";

export default function Compare() {
  const [searchQuery, setSearch] = useState("");
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState([]);

  function handleMovies(movieID) {
    if (movie1 === null) {
      setMovie1(movieID);
      setSearch("");
    } else if (movie2 === null) {
      setMovie2(movieID);
    }
  }

  useEffect(() => {
    const getMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

        const response = await axios.get(url, options);
        // console.log(response.data.results);
        setSearchedMovies(response.data.results);
      } catch (error) {
        console.log(`Error Fetching...${error}`);
      }
    };

    if (searchQuery.length >= 3) {
      getMovies();
    }
  }, [searchQuery]);
  return (
    <div>
      <h1 className="font-bold my-3 pt-5 text-xl">
        {!movie1 && !movie2
          ? "Enter first movie name."
          : movie1 && !movie2
          ? "Enter second movie name."
          : !movie1 && movie2
          ? "Enter first movie name."
          : ""}
      </h1>
      {!movie1 || !movie2 ? (
        <>
          <Search search={searchQuery} onSearch={setSearch} />
          <Searched movies={searchedMovies} onResults={handleMovies} />
        </>
      ) : (
        <CompareMovies
          movie1={movie1}
          movie2={movie2}
          removeMovie1={() => setMovie1(null)}
          removeMovie2={() => setMovie2(null)}
        />
      )}
    </div>
  );
}
