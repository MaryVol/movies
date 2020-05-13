import React from 'react';
import styles from './Header.module.css';

class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: true,
          }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState(prevState => ({
          value: !prevState.value1
        }));
      }


    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.name}</span>
                    <div className={styles.filterBtns}>
                        <label>
                            <input type="radio" value1={this.state.value1} onChange={this.handleChange}  />
                            <div className={styles.box}>
                                <span>{this.props.firstval}</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" value2={this.state.value1 ? false:true} />
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