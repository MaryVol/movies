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

function LoadingIndicator() {
  return <div className={styless.loader}></div>;
}

function NotFound() {
  return <div className={styless.notfound}>Movies not found</div>;
}

function Load(props) {
  switch (props.loadingStatus) {
    case "loading":
      return <LoadingIndicator />;
    case "loaded":
      return props.movieList.length > 0 ? (
        <MovieList movies={props.movieList} />
      ) : (
        <NotFound />
      );
    default:
      break;
  }
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
          <Load
            loadingStatus={this.props.loadingStatus}
            movieList={this.props.movieList}
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
