import React from "react";
import styles from "./MainContent.module.css";
import { connect } from "react-redux";

// function SimilarFilms(props) {
//   let moreMovies = props.movieData.data.data;
//   if (props.movie.genres[0] === moreMovies.genres[0]) {
//     {
//       moreMovies.map((mData) => {
//         return (
//           <div key={mData.id}>
//             <img src={mData.poster_path}></img>
//             <h4>{mData.title}</h4>
//             <small>{mData.genres[0]}</small>
//             <h5>{mData.release_date.split("-")[0]}</h5>
//           </div>
//         );
//       });
//     }
//   }
// }

class MoviePage extends React.Component {
  render() {
    let movie = this.props.movie;
    return (
      <main>
        <div className={styles.container}>
          <div className={styles.movieBageWrapper}>
            <div className={styles.container}>
              <h3>
                <b>netflix</b>roulette
              </h3>
              <p
                className={styles.arrow}
                onClick={() => this.props.onReturnBack(movie)}
              >
                <i className="fas fa-chevron-left"></i>Back
              </p>
              <div className={styles.movieCard}>
                <img src={movie.poster_path} alt="movie poster" />
                <div className={styles.textWrap}>
                  <h2>
                    {movie.title}{" "}
                    <span className={styles.rating}>{movie.vote_count}/10</span>
                  </h2>
                  <p>
                    <span className={styles.number}>
                      {movie.release_date.split("-")[0]}
                    </span>
                    year<span className={styles.number}>{movie.budget}</span>$
                  </p>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
            <div className={styles.similarFilms}>
              {/* <SimilarFilms
                movie={this.props.currentMovie}
                movieData={this.props.movieList}
              /> */}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <h3>
            <b>netflix</b>roulette
          </h3>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,
    sortBy: state.sortBy,
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps)(MoviePage);
