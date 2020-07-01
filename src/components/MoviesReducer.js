import MovieData from "./movies/movies.json";

const initialState = {
  currentMovie: undefined,
  movieList: MovieData,
  sortBy: "title",
};

const MoviesReducer = (state = initialState, action) => {
  return state;
};
export default MoviesReducer;
