import { create } from "zustand";

const useMovieStore = create((set) => ({
  movies: [],
  setmovies: (movies) => set([movies]),
}));

export default useMovieStore;
