import React from "react";
import styles from "./Header.module.css";
import $ from "jquery";
import { connect } from "react-redux";

class Searcher extends React.Component {
  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=e530f5fe1f77ddf63766eee3c707e2fb&language=en-US&page=1&include_adult=false&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("success");
        console.log(searchResults);
        const results = searchResults.results;
      },
      error: (xhr, status, err) => {
        console.error("failed");
      },
    });
  }

  render() {
    return (
      <div className={styles.searcherWrapper}>
        <input
          type="text"
          className={styles.search}
          placeholder="Enter a movie"
          value={this.props.searchQuery}

        />
        <button
          className={styles.srcBtn}
          type="submit"
          onClick={(searchQuery) =>
            this.props.dispatch({
              type: "SEARCH",
              searchQuery: searchQuery,
            })}
        >
          Search
        </button>
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

