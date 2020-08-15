import React from "react";
import styles from "./MainContent.module.css";

function MovieList(props) {
  return (
    <div className={styles.movieWrapper}>
      {props.movies.map((mData, id) => {
        return (
          <div
            className={styles.cardWrapper}
            key={mData.id}
            onClick={() => props.onChange(mData)}
          >
            <img src={mData.poster_path}></img>
            <h4 data-testid="moviespage">{mData.title}</h4>
            <small data-testid="moviegenre">{mData.genres[0]}</small>
            <h5>{mData.release_date.split("-")[0]}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
