import MovieData from "./movies/movies.json";
import MoviePage from "./MoviePage";

const initialState = {
  currentMovie: null,
  movieList: MovieData,
  visibleMoviesId: [],
};

const MoviesReducer = (state = initialState, action) => {
  switch(action.type){
    case "CHOOSE_MOVIE":
      return {
        ...state,
        selectedMovieId: action.id
      }
      default:
        return state
  }
};

//ACTION creator choosing movie by user

export const chooseMovie = (id) => {
  return{
    type: "CHOOSE_MOVIE",
    id,
  }
}
export const CHOOSE_MOVIE='CHOOSE_MOVIE';
export default MoviesReducer;




