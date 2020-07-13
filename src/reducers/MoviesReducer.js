import MovieData from "../components/movies/movies.json";

const initialState = {
  currentMovie: null,
  movieList: MovieData,
  visibleMoviesId: [],
  searchBy: "release_date",
  sortBy: "title",
  searchQuery: "",
};

const MoviesReducer = (state = initialState, action) => {
  // switch(action.type){
  //   case "CHOOSE_MOVIE":
  //     return {
  //       ...state,
  //       selectedMovieId: action.id
  //     }
  //     default:
  return state;
  // }
};

//ACTION creator choosing movie by user

export const chooseMovie = (id) => {
  return {
    type: "CHOOSE_MOVIE",
    id,
  };
};

//ACTION creator toggling button by user

export const toggleChange = (value) => {
  return {
    type: "TOGGLE_CHANGE",
    value,
  };
};

export const CHOOSE_MOVIE = "CHOOSE_MOVIE";
export const TOGGLE_CHANGE = "TOGGLE_CHANGE";
export default MoviesReducer;
