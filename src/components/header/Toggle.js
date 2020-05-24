import React from 'react';
import styles from './Header.module.css';


class Toggle extends React.Component {
    
    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.name}</span>
                    <div className={styles.filterBtns}>
                        {this.props.options.map((name) => {
                        return <label key={name}>
                            <input type="radio" checked={this.props.value === name} onClick={() => this.props.onChange(name)} />
                            <div className={styles.box}>
                                <span>{name}</span>
                            </div>
                        </label>
                        })}
                    </div>
                </div>
         );
    }
}
 
export default Toggle;