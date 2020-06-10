import React from "react";
import styles from "./infobar.module.css";
import Counter from "./Counter";
import Toggle from "./Toggle";

let sortOptions = ["Title", "Genre"];

class Infobarnew extends React.Component {
  render() {
    return (
      <div className={styles.infoBar}>
        <div className={styles.container}>
          <Counter />
          <Toggle
            name={this.props.name}
            options={this.props.options}
            value={this.props.value}
            onClick={() => this.props.onChange(value)}
          />
        </div>
      </div>
    );
  }
}

export default Infobarnew;
