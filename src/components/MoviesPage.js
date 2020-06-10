import React from "react";
import styles from "./MainContent.module.css";
import MovieList from "./MovieList";
import Counter from "./Counter";
import Toggle from "./Toggle";
import styless from "./infobar.module.css";

const sortOptions = [
  { value: "title", displayName: "Title" },
  { value: "genre", displayName: "Genre" },
];

class MoviesPage extends React.Component {
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
              onChange={this.props.onSortChange}
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

export default MoviesPage;
