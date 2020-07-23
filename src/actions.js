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
      console.log(response);
      dispatch({
        type: "FETCH_MOVIES_SUCCESS",
        movieList: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function searchMovies(searchTerm) {
  return function (dispatch) {
    dispatch({
      type: "SEARCH",
      searchQuery: searchTerm,
    });
    dispatch(fetchMovies);
  };
}

export function toggleSort(sortBy) {
  return function (dispatch) {
    dispatch({
      movieList: this.state.movieList.slice().sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return -1;
        } else if (b[sortBy] > a[sortBy]) {
          return 1;
        } else {
          return 0;
        }
      }),
      sortBy: sortBy,
    });
    dispatch(fetchMovies);
  };
}
