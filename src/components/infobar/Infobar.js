import React from 'react';
import styles from './infobar.module.css';
import Counter from './Counter';
import Toggle from '../header/Toggle';
import MovieData from '../mainContent/movies/movies.json';


let sortOptions = [ 'Title', 'Genre' ];

class Infobar extends React.Component {
  constructor(props){
    super(props)
    this.toggleSortTitle = this.toggleSortTitle.bind(this)
    this.state = {
        names: 'Sort by',
        sortBy: 'Title',
        sortOptions: [ 'Title', 'Genre' ],
        MovieData: {},
      }
}
sortByTitle () {
  const {MovieData} = this.state
  let newMovieData = MovieData
  newPostList = postList.sort((a, b) => a.title > b.title)
}

  render(){
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Toggle name={this.state.names} options={this.state.sortOptions} value={this.state.sortBy} onChange={sortBy => this.setState({ sortBy })} />
          </div>
        </div>
    );
  }
}

export default Infobar;