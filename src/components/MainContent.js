import React from "react";
import MovieData from "./movies/movies.json";
import MoviesPage from "./MoviesPage";
import MoviePage from "./MoviePage";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSort = this.toggleSort.bind(this);
    this.state = {
      currentMovie: undefined,
      movieList: MovieData,
      sortBy: "title",
    };
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
    const { movieList } = this.state;
    if (this.state.currentMovie) {
      return (
        <MoviePage
          movie={this.state.currentMovie}
          onChange={(currentMovie) => this.setState({ currentMovie })}
          onReturnBack={(currentMovie) =>
            this.setState({ currentMovie: undefined })
          }
        />
      );
    }
    return (
      <MoviesPage
        movies={movieList}
        sortBy={this.state.sortBy}
        onSortChange={(sortBy) => this.toggleSort(sortBy)}
        onChange={(currentMovie) => this.setState({ currentMovie })}
      />
    );
  }
}

export default MainContent;
