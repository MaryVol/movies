import React from "react";
import styles from "./MainContent.module.css";
import MovieList from "./MovieList";
import Counter from "./Counter";
import Toggle from "./Toggle";
import styless from "./infobar.module.css";
import { connect } from "react-redux";
import { fetchMovies, toggleSort } from "../actions";
import { usePromiseTracker } from "react-promise-tracker";

const sortOptions = [
  { value: "release_date", displayName: "Release date" },
  { value: "rating", displayName: "Rating" },
];

function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <div className={styless.loader}></div>;
}

class MoviesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies);
  }

  render() {
    if (this.props.movieList == 0) {
      console.log("not found");
      return <div className={styless.notfound}>Movies not found</div>;
    }
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
              onChange={(sortBy) => this.props.dispatch(toggleSort(sortBy))}
            />
          </div>
        </div>
        <div className={styles.container}>
          <LoadingIndicator />
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
    movieList: state.movieList,
    counter: state.counter,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(MoviesPage);
