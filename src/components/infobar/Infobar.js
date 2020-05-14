import React from 'react';
import styles from './infobar.module.css';
import Counter from './Counter';
import Toggle from '../header/Toggle';

function Infobar() {
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Toggle options={this.state.sortOptions} value={this.state.sortBy} onChange={sortBy => this.setState({ sortBy })} />
            {/* <Toggle name="sort by:" firstval="release date" secondval="rating" active="firstval" options={[ 'Title', 'Genre' ]}/> */}
          </div>
        </div>
    );
  }

export default Infobar;