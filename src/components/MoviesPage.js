import React from 'react';
import styles from './mainContent/MainContent.module.css';
import Infobar from './infobar/Infobar';
import MovieList from './mainContent/MovieList';

class MoviesPage extends React.Component {

render(){
  const movies = this.props.movies
    return (
      <main>
        <Infobar />
        <div className={styles.container}>
          <MovieList movies={movies} onChange={this.props.onChange}/>
        </div>
        <div className={styles.footer}>
            <h3><b>netflix</b>roulette</h3>
        </div>
      </main>
    );
  }
}

export default MoviesPage;