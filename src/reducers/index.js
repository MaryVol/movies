// import MovieData from "../components/movies/movies.json";

const initialState = {
  currentMovie: null,
  movieList: [],
  visibleMoviesId: [],
  sortBy: "release_date",
  searchBy: "title",
  searchQuery: "",
  counter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_BY":
      return {
        ...state,
        searchBy: action.searchBy,
      };
    case "CHANGE_SORT_BY":
      return {
        ...state,
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
      };
      case "FETCH_MOVIES_SUCCESS":
        return{
          ...state,
          movieList: action.movieList,
        }
    default:
      return state;
  }
};

export default reducer;
