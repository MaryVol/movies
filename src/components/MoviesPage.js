import React from "react";
import styles from "./MainContent.module.css";
import MovieList from "./MovieList";
import Counter from "./Counter";
import Toggle from "./Toggle";
import styless from "./infobar.module.css";
import { connect } from "react-redux";
import axios from "axios";

const sortOptions = [
  { value: "release_date", displayName: "Release date" },
  { value: "rating", displayName: "Rating" },
];

class MoviesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "SEARCH",
      searchQuery: this.props.searchQuery,
    });
    const urlString = "https://reactjs-cdp.herokuapp.com/movies/";
    axios
      .get(urlString, {
        params: {
          search: this.props.searchQuery,
          sortBy: this.props.sortBy,
          sortOrder: "desc",
          searchBy: this.props.searchBy,
        },
      })
      .then((response) => {
        console.log(response);
        this.props.dispatch({
          type: "FETCH_MOVIES_SUCCESS",
          movieList: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const movies = this.props.movies;
    return (
      <main>
        <div className={styless.infoBar}>
          <div className={styless.container}>
            <Counter />
            <Toggle
              name="Sort by"
              options={sortOptions}
              value={this.props.sortBy}
              onChange={(sortBy) =>
                this.props.dispatch({
                  type: "CHANGE_SORT_BY",
                  sortBy: sortBy,
                })
              }
            />
          </div>
        </div>
        <div className={styles.container}>
          <MovieList movies={movies} onChange={this.props.onChange} />
        </div>
        <div className={styles.footer}>
          <h3>
            <b>netflix</b>roulette
          </h3>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.sortBy,
    searchQuery: state.searchQuery,
    searchBy: state.searchBy,
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps)(MoviesPage);
