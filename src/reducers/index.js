import MovieData from "../components/movies/movies.json";

const initialState = {
  currentMovie: null,
  movieList: MovieData,
  visibleMoviesId: [],
  searchBy: "release_date",
  sortBy: "title",
  searchQuery: "",
};

export default reducer;
