import React from "react";
import styles from "./MainContent.module.css";
import MovieList from "./MovieList";
import Counter from "./Counter";
import Toggle from "./Toggle";
import styless from "./infobar.module.css";
import { connect } from "react-redux";
import { fetchMovies, toggleSort } from "../actions";

const sortOptions = [
  { value: "release_date", displayName: "Release date" },
  { value: "rating", displayName: "Rating" },
];

function LoadingIndicator(props) {
  if (props.loading === "loading") {
    return <div className={styless.loader}></div>;
  } else if (props.loading === "loaded") {
    return null;
  } else if (props.loading === "loaded" && props.movieList.length == 0) {
    return <div className={styless.notfound}>Movies not found</div>;
  }
}

function NotFound(props) {
  if (props.movieList.length == 0 && props.loading === "loaded") {
    return <div className={styless.notfound}>Movies not found</div>;
  } else return null;
}

class MoviesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies);
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
              onChange={(sortBy) => this.props.dispatch(toggleSort(sortBy))}
            />
          </div>
        </div>
        <div className={styles.container}>
          <LoadingIndicator
            loading={this.props.loadingStatus}
            movieList={this.props.movieList}
          />
          <NotFound
            movieList={this.props.movieList}
            loading={this.props.loadingStatus}
          />
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
    loadingStatus: state.loadingStatus,
  };
};

export default connect(mapStateToProps)(MoviesPage);
