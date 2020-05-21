import React from 'react';
import styles from './MainContent.module.css';
import Infobar from '../infobar/Infobar';
import Movie from './Movie';
import MoviePage from './MoviePage';

class MainContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        currentMovie: undefined,
        movies: [
        {
            id: 0,
            title: "Kill Bill: Vol2",
            release_date: "2004",
            poster_path: "https://i.pinimg.com/originals/64/82/ef/6482ef51ce0b437986ec477e0d46f30c.jpg",
            overview: "film description",
            runtime: "154",
            rating: "4.2",
            genre: "Action & Adventure",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis."
        },
        {
            id: 1,
            title: "Kill Bill: Vol1",
            release_date: "2003",
            poster_path: "https://www.film.ru/sites/default/files/movies/posters/tumblr_n4k5nvk6c01tzuuzio1_1280.jpg",
            overview: "film description",
            runtime: "160",
            rating: "4.0",
            genre: "Action & Adventure",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis."
        }
    ]
  }
}

render(){
    return (
      <main>
        <Infobar />
        <div className={styles.container}>
          {this.state.currentMovie ? 
          <MoviePage movie={this.state.currentMovie} onChange={currentMovie => this.setState({ currentMovie })} onReturnBack={currentMovie => this.setState({ currentMovie: undefined })}/> : 
          <Movie movies={this.state.movies} onChange={currentMovie => this.setState({ currentMovie })}/>}
        </div>
        <div className={styles.footer}>
            <h3><b>netflix</b>roulette</h3>
        </div>
      </main>
    );
  }
}

export default MainContent;