import React from 'react';
import styles from './Header.module.css';

class Toggle extends React.Component {
    
    handleChange() {
        this.setState(prevState => ({
          sedcondval: !prevState.firstval
        }));
      }


    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.sortBy}</span>
                    <div className={styles.filterBtns}>
                        <label>
                            <input type="radio" checked={this.props.value === this.props.sortOptions[0]} onClick={this.handleChange}  />
                            <div className={styles.box}>
                                <span>{this.props.sortOptions[0]}</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" checked={this.props.value ? false:true} onClick={this.handleChange} />
                            <div className={styles.box}>
                                <span>{this.props.sortOptions[1]}</span>
                            </div>
                        </label>
                    </div>
                </div>
         );
    }
}
 
export default Toggle;