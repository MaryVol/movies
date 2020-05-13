import React from 'react';
import styles from './infobar.module.css';
import Counter from './Counter';
import Toggle from '../header/Toggle';

function Infobar() {
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Toggle name="sort by:" firstval="release date" secondval="rating" active="value1"/>
          </div>
        </div>
    );
  }

export default Infobar;