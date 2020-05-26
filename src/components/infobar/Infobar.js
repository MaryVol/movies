import React from 'react';
import styles from './infobar.module.css';
import Counter from './Counter';
import Toggle from '../header/Toggle';
import MovieData from '../mainContent/movies/movies.json';


let sortOptions = [ 'Title', 'Genre' ];

class Infobar extends React.Component {
  constructor(props){
    super(props)
    this.toggleSort = this.toggleSort.bind(this)
    this.state = {
        names: 'Sort by',
        sortBy: 'Title',
        sortOptions: [ 'Title', 'Genre' ],
        MovieList: [],
        isSorted: false,
      }
}
sortBy (param) {
  const {MovieList} = this.state
  let newMovieList = MovieList
  if (this.state.isSorted == false){
    newMovieList = MovieList.sort((a, b) => a.param > b.param)
  }
  this.setState({
    isSorted: !this.state.isSorted,
    MovieList: newMovieList
  })
}
toggleSort(event) {
  this.sortBy(this.state.sortBy)
}
componentDidMount () {
  const MovieList = MovieData
  this.setState({
    MovieList: MovieList,
    isSorted: true,
  })
}
  render(){
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Toggle onClick={this.toggleSort()} name={this.state.names} options={this.state.sortOptions} value={this.state.sortBy} onChange={sortBy => this.setState({ sortBy })} />
          </div>
        </div>
    );
  }
}

export default Infobar;