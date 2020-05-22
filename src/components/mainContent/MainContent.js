import React from 'react';
import styles from './MainContent.module.css';
import Infobar from '../infobar/Infobar';
import Movie from './Movie';
import MoviePage from './MoviePage';
import data from './movies/movies.json';

class MainContent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        currentMovie: undefined,
  }
}

render(){
  let movies = require('./movies/movies.json')
    return (
      <main>
        <Infobar />
        <div className={styles.container}>
          {this.state.currentMovie ? 
          <MoviePage movie={this.state.currentMovie} onChange={currentMovie => this.setState({ currentMovie })} onReturnBack={currentMovie => this.setState({ currentMovie: undefined })}/> : 
          <Movie movies={movies} onChange={currentMovie => this.setState({ currentMovie })}/>}
        </div>
        <div className={styles.footer}>
            <h3><b>netflix</b>roulette</h3>
        </div>
      </main>
    );
  }
}

export default MainContent;