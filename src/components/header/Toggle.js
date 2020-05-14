import React from 'react';
import styles from './Header.module.css';

class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sortBy: 'Sort by',
            sortOptions: [ 'Title', 'Genre' ],
            active: this.props.firstval,
          }
        this.handleChange = this.handleChange.bind(this);
    }
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
                            <input type="radio" checked={this.state.firstval} onClick={this.handleChange}  />
                            <div className={styles.box}>
                                <span>{this.props.sortOptions[0]}</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" checked={this.state.firstval ? false:true} onClick={this.handleChange} />
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