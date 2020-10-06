import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { searchMovies } from "../actions";
import { withRouter } from "react-router";
import qs from "qs";

class Searcher extends React.Component {
  
  componentDidMount() {
    const defaultProps = {
      searchBy: "title",
      sortBy: "release_date",
      searchQuery: "",
    };
    const fromURL = qs.parse(this.props.location.search.slice(1));
    const props = { ...defaultProps, ...fromURL };
    this.props.dispatch(searchMovies(props));
    console.log(props)
  }

  componentDidUpdate() {
    const defaultProps = {
      searchBy: "title",
      sortBy: "release_date",
      searchQuery: "",
    };
    const fromURL = qs.parse(this.props.location.search.slice(1));
    const props = { ...defaultProps, ...fromURL };
    this.props.dispatch(searchMovies(props));
  }
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  

  render() {
    return (
      <div className={styles.searcherWrapper}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.dispatch(searchMovies(this.input.current.value));
            // this.props.history.push(`/movies`);
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
