import React from 'react';
import MovieData from './movies/movies.json';
import MoviesPage from '../MoviesPage';
import MoviePage from '../MoviePage';
import Infobarnew from '../Infobarnew';

class MainContent extends React.Component {

  constructor(props){
    super(props)
    this.toggleSort = this.toggleSort.bind(this)
    this.state = {
        currentMovie: undefined,
        movieList: MovieData,
        names: 'Sort by',
        sortBy: 'title',
        sortOptions: [  {value: "title", displayName: "Title"},
                        {value:"genre", displayName: 'Genre' }
                      ],
        MovieList: [],
        isSorted: false,
  }
}
toggleSort(sortBy) {
  const {MovieList} = this.state
  let newMovieList = MovieList
  if (this.state.isSorted == false){
    newMovieList = MovieList.sort((a, b) => a[sortBy] > b[sortBy])
  }
  this.setState({
    isSorted: !this.state.isSorted,
    MovieList: newMovieList,
    sortBy: sortBy
  })
}

componentDidMount () {
  const MovieList = MovieData
  this.setState({
    MovieList: MovieList,
    isSorted: true,
  })
}

render(){
  <Infobarnew name={this.state.names} options={this.state.sortOptions} value={this.state.sortBy} onChange={sortBy => this.toggleSort(sortBy)}/>
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