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
    const urlString =
      "https://reactjs-cdp.herokuapp.com/movies/?sortBy=&sortOrder=&search=${searchTerm}&searchBy=";
    axios
      .get(urlString)
      .then((response) => {
        this.setState({ searchQuery: response.data });
        console.log(response);
        this.props.dispatch({
          type: "SEARCH",
          searchQuery: this.input.current.value,
        });
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
            this.performSearch(this.props.searchQuery);
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
  };
};

export default connect(mapStateToProps)(Searcher);
