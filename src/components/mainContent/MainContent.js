import React from 'react';
import styles from './MainContent.module.css';
import Infobar from '../infobar/Infobar';
import Movie from './Movie';
import MoviePage from './MoviePage';
import MovieData from './movies/movies.json';

class MainContent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        currentMovie: undefined,
        MovieList: [],
  }
}

componentDidMount () {
  const MovieList = MovieData
  this.setState({
    MovieList: MovieList
  })
}

render(){
  const {MovieList} = this.state
    return (
      <main>
        <Infobar />
        <div className={styles.container}>
          {this.state.currentMovie ? 
          <MoviePage movie={this.state.currentMovie} onChange={currentMovie => this.setState({ currentMovie })} onReturnBack={currentMovie => this.setState({ currentMovie: undefined })}/> : 
          <Movie movies={MovieList} onChange={currentMovie => this.setState({ currentMovie })}/>}
        </div>
        <div className={styles.footer}>
            <h3><b>netflix</b>roulette</h3>
        </div>
      </main>
    );
  }
}

export default MainContent;