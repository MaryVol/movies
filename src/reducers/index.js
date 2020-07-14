import MovieData from "../components/movies/movies.json";

const initialState = {
  currentMovie: null,
  movieList: MovieData,
  visibleMoviesId: [],
  sortBy: "release_date",
  searchBy: "title",
  searchQuery: "",
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CHANGE_SEARCH_BY":
      return{
        ...state,
        searchBy: action.searchBy,
      };
      case "CHANGE_SORT_BY":
      return{
        ...state,
        sortBy: action.sortBy,
      };
    default: return state;
  }
  
};

export default reducer;
