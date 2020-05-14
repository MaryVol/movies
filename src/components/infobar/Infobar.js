import React from 'react';
import styles from './infobar.module.css';
import Counter from './Counter';
import Toggle from '../header/Toggle';

let sortOptions = [ 'Title', 'Genre' ];

class Infobar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        sortBy: 'Sort by',
        sortOptions: [ 'Title', 'Genre' ],
        active: this.props.firstval,
        checked: sortOptions[0]
      }
    // this.handleChange = this.handleChange.bind(this);
}
  render(){
    return (
        <div className={styles.infoBar}>
          <div className={styles.container}>
            <Counter />
            <Toggle options={this.state.sortOptions} value={this.state.sortBy} onChange={sortBy => this.setState({ sortBy })} />
          </div>
        </div>
    );
  }
}

export default Infobar;