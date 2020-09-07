import React from "react";
import styles from "./MainContent.module.css";
import { Link } from "react-router-dom";

function MovieList(props) {
  return (
    <div className={styles.movieWrapper}>
      {props.movies.map((mData, id) => {
        return (
          <div
            key={mData.id}
            className={styles.cardWrapper}
            onClick={() => props.onChange(mData)}
          >
            <Link to={`/movie/${mData.title}`}>
              <img src={mData.poster_path}></img>

              <h4 data-testid="moviespage">{mData.title}</h4>
              <small>{mData.genres[0]}</small>
              <h5>{mData.release_date.split("-")[0]}</h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
