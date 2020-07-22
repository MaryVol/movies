export function fetchMovies(getState, dispatch){
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