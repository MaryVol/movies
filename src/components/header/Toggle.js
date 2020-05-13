import React from 'react';
import styles from './Header.module.css';

class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value1: this.props.firstval,
          }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState(prevState => ({
          value2: !prevState.value1
        }));
      }


    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.name}</span>
                    <div className={styles.filterBtns}>
                        <label>
                            <input type="radio" value='value1' checked={this.state.value1} onClick={this.handleChange}  />
                            <div className={styles.box}>
                                <span>{this.props.firstval}</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" value='value2' checked={this.state.value1 ? false:true} onClick={this.handleChange} />
                            <div className={styles.box}>
                                <span>{this.props.secondval}</span>
                            </div>
                        </label>
                    </div>
                </div>
         );
    }
}
 
export default Toggle;