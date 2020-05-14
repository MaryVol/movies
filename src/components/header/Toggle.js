import React from 'react';
import styles from './Header.module.css';


class Toggle extends React.Component {
    
    // handleChange() {
    //     this.setState(prevState => ({
    //       sedcondval: !prevState.firstval
    //     }));
    //   }

    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.name}</span>
                    <div className={styles.filterBtns}>
                        {/* {options.map((name) => {
                        return <label>
                            <input type="radio" checked={this.props.value === this.props.options[0]} onClick={() => this.props.onChange(this.props.options[0])}  />
                            <div className={styles.box}>
                                <span>{name.sortOptions[0]}</span>
                            </div>
                        </label>
                        })} */}
                        <label>
                            <input type="radio" checked={this.props.value === this.props.options[1]} onClick={() => this.props.onChange(this.props.options[1])}  />
                            <div className={styles.box}>
                                <span>{this.props.options[1]}</span>
                            </div>
                        </label>
                    </div>
                </div>
         );
    }
}
 
export default Toggle;