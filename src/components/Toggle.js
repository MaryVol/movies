import React from "react";
import styles from "./Header.module.css";

class Toggle extends React.Component {
  render() {
    return (
      <div className={styles.filterWrapper}>
        <span>{this.props.name}</span>
        <div className={styles.filterBtns}>
          {this.props.options.map((option) => {
            return (
              <label key={option.value}>
                <input
                  type="radio"
                  checked={this.props.value === option.value}
                  onChange={() => this.props.onChange(option.value)}
                />
                <div className={styles.box}>
                  <span>{option.displayName}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Toggle;
