import axios from "axios";

export function fetchMovies(dispatch, getState) {
  const state = getState();
  const urlString = "https://reactjs-cdp.herokuapp.com/movies/";
  axios
    .get(urlString, {
      params: {
        search: state.searchQuery,
        sortBy: state.sortBy,
        sortOrder: "desc",
        searchBy: state.searchBy,
      },
    })
    .then((response) => {
      dispatch({
        type: "FETCH_MOVIES_SUCCESS",
        movieList: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

const SEARCH = "SEARCH";
export function searchMovies(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: SEARCH,
      searchQuery: searchTerm,
    });
    dispatch(fetchMovies);
  };
}

export function toggleSort(sortBy) {
  return function (dispatch) {
    dispatch({
      type: "CHANGE_SORT_BY",
      sortBy: sortBy,
    });
    dispatch(fetchMovies);
  };
}

export function toggleSearch(searchBy) {
  return function (dispatch) {
    dispatch({
      type: "CHANGE_SEARCH_BY",
      searchBy: searchBy,
    });
    dispatch(fetchMovies);
  };
}

export function fetchSimilarMovies(dispatch, getState) {
  const state = getState();
  const urlString = "https://reactjs-cdp.herokuapp.com/movies/";
  axios
  .get(urlString, {
    params: {
      searchBy: "genre",
    },
  })
    .then((response) => {
      console.log(response);
        dispatch({
          type: "LOAD_SIMILAR_MOVIES",
          similarMovies: response.data.data,
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
