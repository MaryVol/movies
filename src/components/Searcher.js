import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { searchMovies } from "../actions";
import { withRouter } from "react-router";
import qs from "qs";

class Searcher extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(searchMovies(this.props.location.search.searchQuery));
  }

  componentDidUpdate() {
    this.props.dispatch(searchMovies(this.props.location.search.searchQuery));
  }
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  

  render() {
    const defaultProps = {
      searchBy: "title",
      sortBy: "rating",
      searchQuery: "",
    };
    const fromURL = qs.parse(this.props.location.search.slice(1));
    const props = { ...defaultProps, ...fromURL };
    console.log(props);
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
