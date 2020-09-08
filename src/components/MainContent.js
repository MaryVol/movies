import React from "react";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

class MainContent extends React.Component {
  render() {
    const { movieList } = this.props;

    return (
      <Switch>
        <Route exact path="/" component={MoviesPage} />
        <Route exact path="/movie/:movieId" component={MoviePage} />
      </Switch>
    );
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
