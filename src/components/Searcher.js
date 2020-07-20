import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import axios from "axios";

class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      searchQuery: this.props.searchQuery,
    };
  }

  performSearch(searchTerm) {
    this.props.dispatch({
      type: "SEARCH",
      searchQuery: searchTerm,
    });
    const urlString = "https://reactjs-cdp.herokuapp.com/movies/";
    axios
      .get(urlString, {
        params: {
          search: searchTerm,
          sortBy: this.props.sortBy,
          sortOrder: "desc",
          searchBy: this.props.searchBy,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={styles.searcherWrapper}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.performSearch(this.input.current.value);
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
  };
};

export default connect(mapStateToProps)(Searcher);
