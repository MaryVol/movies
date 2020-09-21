// import MovieData from "../components/movies/movies.json";

const initialState = {
  currentMovie: null,
  movieList: [],
  visibleMoviesId: [],
  sortBy: "release_date",
  searchBy: "title",
  searchQuery: "",
  counter: "",
  loadingStatus: "loading",
  similarMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_BY":
      return {
        ...state,
        loadingStatus: "loading",
        searchBy: action.searchBy,
      };
    case "CHANGE_SORT_BY":
      return {
        ...state,
        loadingStatus: "loading",
        sortBy: action.sortBy,
      };
    case "SHOW_MOVIE":
      return {
        ...state,
        currentMovie: action.currentMovie,
      };
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.searchQuery,
        loadingStatus: "loading",
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        loadingStatus: "loaded",
        movieList: action.movieList,
      };
    case "LOAD_SIMILAR_MOVIES":
      return {
        ...state,
        similarMovies: action.similarMovies,
      };
      case "LOAD_MOVIE":
        return {
          ...state,
          currentMovie: action.currentMovie,
        };
      case "START_LOAD_MOVIE":
        return {
          ...state,
          currentMovie: action.currentMovie,
        };
    default:
      return state;
  }
};

export default reducer;
