import React from "react";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";
import { connect } from "react-redux";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSort = this.toggleSort.bind(this);
  }
  
  toggleSort(sortBy) {
    this.setState({
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
  }

  render() {
    const { movieList } = this.props;
    if (this.props.currentMovie) {
      return (
        <MoviePage
          movie={this.props.currentMovie}
          onChange={(currentMovie) =>
            this.props.dispatch({
              type: "SHOW_MOVIE",
              currentMovie: currentMovie,
            })
          }
          onReturnBack={(currentMovie) =>
            this.props.dispatch({
              type: "SHOW_MOVIE",
              currentMovie: null,
            })
          }
        />
      );
    }
    return (
      <MoviesPage
        movies={movieList}
        sortBy={this.props.sortBy}
        onSortChange={(sortBy) => this.toggleSort(sortBy)}
        onChange={(currentMovie) =>
          this.props.dispatch({
            type: "SHOW_MOVIE",
            currentMovie: currentMovie,
          })
        }
      />
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
