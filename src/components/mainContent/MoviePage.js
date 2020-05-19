import React from 'react';
import styles from './MainContent.module.css';


class MoviePage extends React.Component {

    render(){
        return (
            <div className={styles.movieBageWrapper} visible={this.props.value === arr} onClick={() => this.props.onChange(arr)}>
                <div className={styles.container}>
                    <h3><b>netflix</b>roulette</h3>
                    <div className={styles.movieCard}>
                        <img src={this.props.img} alt="movie poster"/>
                        <div className={styles.textWrap}>
                            <h2>{this.props.mtitle} <span className={styles.rating}>{this.props.rate}</span></h2>
                            <p><span className={styles.number}>{this.props.date}</span>year<span className={styles.number}>{this.props.time}</span>min</p>
                            <p>{this.props.opis}</p>
                        </div>
                    </div> 
                </div>
            </div>
        );
      }
    }
    
export default MoviePage;