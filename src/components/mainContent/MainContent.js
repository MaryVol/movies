import React from 'react';
import styles from './MainContent.module.css';
import Infobar from '../infobar/Infobar';

function MainContent() {
    return (
      <main>
        <Infobar />
        <div className={styles.container}>

        </div>
      </main>
    );
  }

export default MainContent;