import React from 'react';
import styles from './MainContent.module.css';
import MoviesData from './movies/movies.json';


function Movie() {
    return (
        <div className={styles.movieWrapper}>
          {MoviesData.map((mData, id)=>{
              return <div className={styles.cardWrapper} key={mData.id}>
                <img  src={mData.poster_path}></img>
                <h4>{mData.title}</h4>
                <small>{mData.genre}</small>
                <h5>{mData.release_date}</h5>
              </div>

          })}
        </div>
    );
  }

export default Movie;