import React from 'react';
import styles from './Header.module.css';
import Searcher from './Searcher';
import Filter from './Filter';

class Header extends React.Component {
    render() { 
        return ( 
            <header>
                <div className={styles.container}>
                    <h3><b>netflix</b>roulette</h3>
                    <h1>find your movie</h1>
                    <Searcher />
                    <Filter />
                </div>
            </header>
         );
    }
}
 
export default Header;
