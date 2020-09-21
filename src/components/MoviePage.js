import React from "react";
import styles from "./MainContent.module.css";
import { connect } from "react-redux";
import MovieList from "./MovieList";
import { fetchSimilarMovies, fetchMovie } from "../actions";

class MoviePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovie(this.props.match.params.movieId));
    if (!this.props.currentMovie) return "loading...";
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentMovie !== null && prevProps.currentMovie === null) {
      this.props.dispatch(fetchSimilarMovies);
    }
  }

  render() {
    let movie = this.props.currentMovie;
    return (
      <main>
        <div className={styles.container}>
          <h3>
            <b>netflix</b>roulette
          </h3>
          <div className={styles.movieBageWrapper}>
            <div className={styles.container}>
              <p
                className={styles.arrow}
                onClick={() => this.props.history.goBack()}
              >
                <i className="fas fa-chevron-left"></i>Back
              </p>
              <div className={styles.movieCard}>
                <img src={movie.poster_path} alt="movie poster" />
                <div className={styles.textWrap}>
                  <h2>
                    {movie.title}{" "}
                    <span className={styles.rating}>{movie.vote_count}/10</span>
                  </h2>
                  <p>
                    <span className={styles.number}>
                      {movie.release_date.split("-")[0]}
                    </span>
                    year<span className={styles.number}>{movie.budget}</span>$
                  </p>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.similar} data-testid="moviegenre">
          You might also like
        </p>
        <MovieList
          movies={this.props.similarMovies}
          onChange={(currentMovie) => {
            this.props.dispatch({
              type: "SHOW_MOVIE",
              currentMovie: currentMovie,
            });
          }}
        />
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
    currentMovie: state.currentMovie,
    sortBy: state.sortBy,
    movieList: state.movieList,
    similarMovies: state.similarMovies,
  };
};

export default connect(mapStateToProps)(MoviePage);
