import MovieData from "../components/movies/movies.json";

const initialState = {
  currentMovie: null,
  movieList: MovieData,
  visibleMoviesId: [],
  sortBy: "title",
  searchBy: "release_date",
  searchQuery: "",
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CHANGE_SEARCH_BY":
      return{
        ...state,
        searchBy: action.searchBy,
      };
    default: return state;
  }
  
};

export default reducer;