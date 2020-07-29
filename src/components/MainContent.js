import React from "react";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";
import { connect } from "react-redux";

class MainContent extends React.Component {
  render() {
    const { movieList } = this.props;
    if (this.props.currentMovie) {
      return (
        <MoviePage
          movie={this.props.currentMovie}
          onReturnBack={(currentMovie) =>
            this.props.dispatch({
              type: "SHOW_MOVIE",
              currentMovie: null,
            })
          }
        />
      );
    }
    return <MoviesPage movies={movieList} sortBy={this.props.sortBy} />;
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,
    sortBy: state.sortBy,
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps)(MainContent);
