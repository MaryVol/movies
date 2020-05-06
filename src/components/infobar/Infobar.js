import React from 'react';
import styles from './infobar.module.css';
import Filter from '../header/Filter';
import Counter from './Counter';

function Infobar() {
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Filter name="sort by:" firstval="release date" secondval="rating"/>
          </div>
        </div>
    );
  }

export default Infobar;