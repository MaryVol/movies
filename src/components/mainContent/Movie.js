import React from 'react';
import styles from './MainContent.module.css';
import MoviesData from './movies/movies.json';

function Movie() {
    return (
        <div className={styles.movieWrapper}>
          {MoviesData.map((mData, id)=>{
              return <div className={styles.cardWrapper}>
                <img key={mData.id} src={mData.poster_path}></img>
                <h4 key={mData.title}>{mData.title}</h4>
                <small key={mData.genre}>{mData.genre}</small>
                <h5 key={mData.release_date}>{mData.release_date}</h5>
              </div>

          })}
        </div>
    );
  }

export default Movie;