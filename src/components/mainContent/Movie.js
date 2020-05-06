import React from 'react';
import styles from './MainContent.module.css';
import MoviesData from './movies/movies.json';

function Movie() {
    return (
        <div className={styles.movieWrapper}>
          {MoviesData.map(()=>{
              
          })}
        </div>
    );
  }

export default Movie;