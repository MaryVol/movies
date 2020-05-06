import React from 'react';
import styles from './MainContent.module.css';
import Infobar from '../infobar/Infobar';
import Movie from './Movie';

function MainContent() {
    return (
      <main>
        <Infobar />
        <div className={styles.container}>
          <Movie />
        </div>
        <div className={styles.footer}>
            <h3><b>netflix</b>roulette</h3>
        </div>
      </main>
    );
  }

export default MainContent;