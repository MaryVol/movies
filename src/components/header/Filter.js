import React from 'react';
import styles from './Header.module.css';

class Filter extends React.Component {
    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>search by:</span>
                    <div className={styles.filterBtns}>
                        <label>
                            <input type="radio" name="radio" checked/>
                            <div className={styles.box}>
                                <span>Title</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <div className={styles.box}>
                                <span>Genre</span>
                            </div>
                        </label>
                    </div>
                </div>
         );
    }
}
 
export default Filter;