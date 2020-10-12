import React from "react";
import styles from "./MainContent.module.css";
import MovieList from "./MovieList";
import Counter from "./Counter";
import Toggle from "./Toggle";
import styless from "./infobar.module.css";
import { connect } from "react-redux";
import { fetchMovies, toggleSort } from "../actions";
import Header from "./Header";
import { withRouter } from "react-router";
import qs from "qs";

const sortOptions = [
  { value: "release_date", displayName: "Release date" },
  { value: "rating", displayName: "Rating" },
];

export function LoadingIndicator() {
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
        <MovieList movies={props.movieList} onChange={props.onChange} />
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
        <Header />
        <div className={styless.infoBar}>
          <div className={styless.container}>
            <Counter />
            <Toggle
              name="Sort by"
              options={sortOptions}
              value={this.props.sortBy}
              onChange={(sortBy) => {
                this.props.dispatch(toggleSort(sortBy));
                const fromURL = qs.parse(this.props.location.search.slice(1));
                const currentParams = {
                  ...fromURL,
                  sortBy: sortBy,
                };
                const params = qs.stringify({ ...fromURL, ...currentParams });
                this.props.history.push({
                  search: `?${params}`,
                });
                console.log(this.props);
              }}
            />
          </div>
        </div>
        <div className={styles.container}>
          <Load
            loadingStatus={this.props.loadingStatus}
            movieList={this.props.movieList}
            onChange={(currentMovie) => {
              this.props.dispatch({
                type: "SHOW_MOVIE",
                currentMovie: currentMovie,
              });
            }}
          />
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
    currentMovie: state.currentMovie,
  };
};

export default connect(mapStateToProps)(withRouter(MoviesPage));
