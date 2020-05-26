import React from 'react';
import styles from './MainContent.module.css';
import Infobar from '../infobar/Infobar';
import MovieList from './MovieList';
import MovieData from './movies/movies.json';
import MoviesPage from '../MoviesPage';
import MoviePage from '../MoviePage';

class MainContent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        currentMovie: undefined,
        movieList: MovieData,
  }
}

render(){
  const {movieList} = this.state
  if (this.state.currentMovie){
    return <MoviePage movie={this.state.currentMovie} onChange={currentMovie => this.setState({ currentMovie })} onReturnBack={currentMovie => this.setState({ currentMovie: undefined })}/>
  }
    return (
          <MoviesPage movies={movieList} onChange={currentMovie => this.setState({ currentMovie })}/>
    );
  }
}

export default MainContent;