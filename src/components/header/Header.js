import React from 'react';
import styles from './Header.module.css';
import Searcher from './Searcher';
import Toggle from './Toggle';

class Header extends React.Component {
    render() { 
        return ( 
            <header>
                <div className={styles.container}>
                    <h3><b>netflix</b>roulette</h3>
                    <h1>find your movie</h1>
                    <Searcher />
                    <Toggle options={this.state.searchByOptions} value={this.state.searchBy} onChange={searchBy => this.setState({ searchBy })} />
                </div>
            </header>
         );
    }
}
 
export default Header;
