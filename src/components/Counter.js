import React from "react";
import styles from "./infobar.module.css";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div className={styles.counterWrapper}>
        <p>{this.props.counter} movies found</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.movieList.length,
    movieList: [],
  };
};

export default connect(mapStateToProps)(Counter);
