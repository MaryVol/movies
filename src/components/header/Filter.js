import React from 'react';
import styles from './Header.module.css';

class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            check1: true,
            check2: false,
        }
    }
    changeVal(){
        this.setState({
            check1: false,
            check2: true,
        })
    }
    changeValBack(){
        this.setState({
            check1: true,
            check2: false,
        })
    }


    render() { 
        return ( 
                <div className={styles.filterWrapper}>
                    <span>{this.props.name}</span>
                    <div className={styles.filterBtns}>
                        <label>
                            <input type="radio" value="check1" checked={this.state.check1} onClick={()=> this.changeValBack()}/>
                            <div className={styles.box}>
                                <span>{this.props.firstval}</span>
                            </div>
                        </label>
                        <label>
                            <input type="radio" value="check2" checked={this.state.check2} onClick={()=> this.changeVal()} />
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