import React from 'react';
import styles from './Header.module.css';

class Filter extends React.Component {
    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.name}</span>
                    <div className={styles.filterBtns}>
                        <label>
                            <input type="radio" name="radio" checked/>
                            <div className={styles.box}>
                                <span>{this.props.firstval}</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="radio"/>
                            <div className={styles.box}>
                                <span>{this.props.secondval}</span>
                            </div>
                        </label>
                    </div>
                </div>
         );
    }
}
 
export default Filter;