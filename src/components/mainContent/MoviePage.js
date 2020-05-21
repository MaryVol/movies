import React from 'react';
import styles from './MainContent.module.css';
import MainContent from './MainContent';


class MoviePage extends React.Component {

    render(){
        let movie = this.props.movie
        return (
            <div className={styles.movieBageWrapper} >
                <div className={styles.container}>
                    <h3><b>netflix</b>roulette</h3> 
                    <p className={styles.arrow} onClick={() => this.props.onChange(movie)}><i className="fas fa-chevron-left"></i>Back</p>
                    <div className={styles.movieCard}>
                        <img src={movie.poster_path} alt="movie poster"/>
                        <div className={styles.textWrap}>
                            <h2>{movie.title} <span className={styles.rating}>{movie.rating}</span></h2>
                            <p><span className={styles.number}>{movie.release_date}</span>year<span className={styles.number}>{movie.runtime}</span>min</p>
                            <p>{movie.description}</p>
                        </div>
                    </div> 
                </div>
            </div>
        );
      }
    }
    
export default MoviePage;