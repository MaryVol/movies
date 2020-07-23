import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { fetchMovies, toggleSearch } from "../actions";

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
                  // onChange={() => this.props.onChange(option.value)}
                  onChange={(searchBy) => {
                    this.props.dispatch(toggleSearch(searchBy));
                    this.props.onChange(option.value);
                  }}
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

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
  };
};

export default connect(mapStateToProps)(Toggle);
