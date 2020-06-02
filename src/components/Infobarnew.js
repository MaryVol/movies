import React from 'react';
import styles from '../components/infobar/infobar.module.css';
import Counter from '../components/infobar/Counter';
import Toggle from '../components/header/Toggle';


let sortOptions = [ 'Title', 'Genre' ];

class Infobarnew extends React.Component {

  render(){
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Toggle name={this.props.name} options={this.props.options} value={this.props.value} onClick={() => this.props.onChange(value)} />
          </div>
        </div>
    );
  }
}

export default Infobarnew;