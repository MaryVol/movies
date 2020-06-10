import React from 'react';
import styles from './Header.module.css';

class Searcher extends React.Component {
    render() { 
        return ( 
            <div className={styles.searcherWrapper}>
                <input type="text" className={styles.search} placeholder="Enter a movie"/>
                <button className={styles.srcBtn}>Search</button>
            </div>
         );
    }
}
 
export default Searcher;