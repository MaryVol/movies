import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { searchMovies } from "../actions";
import { withRouter } from "react-router";

class Searcher extends React.Component {
  componentDidUpdate() {
    this.props.dispatch(searchMovies(this.props.location.search.searchQuery));
    console.log(this.props)
  }
  constructor(props) {
    super(props);
    this.input = React.createRef();
    // this.state = {
    //   searchQuery: this.props.searchQuery,
    // };
  }

  render() {
    return (
      <div className={styles.searcherWrapper}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.dispatch(searchMovies(this.input.current.value));
            this.props.history.push(
              `/movies/?q=${this.props.searchQuery}`
            );
            console.log(this.props);
          }}
        >
          <input
            type="text"
            className={styles.search}
            placeholder="Enter a movie"
            defaultValue={this.props.searchQuery}
            ref={this.input}
          />
          <button className={styles.srcBtn} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery,
    sortBy: state.sortBy,
    searchBy: state.searchBy,
    movieList: state.movieList,
  };
};

export default connect(mapStateToProps)(withRouter(Searcher));
