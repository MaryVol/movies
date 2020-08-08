import React from "react";
import styles from "./Header.module.css";
import Searcher from "./Searcher";
import Toggle from "./Toggle";
import { connect } from "react-redux";
import { toggleSearch } from "../actions";

let searchByOptions = [
  { value: "title", displayName: "Title" },
  { value: "genres", displayName: "Genre" },
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.container}>
          <h3>
            <b>netflix</b>roulette
          </h3>
          <h1>find your movie</h1>
          <Searcher key={this.props.searchQuery} />
          <Toggle
            name="Search by"
            options={searchByOptions}
            value={this.props.searchBy}
            onChange={(searchBy) => this.props.dispatch(toggleSearch(searchBy))}
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    searchQuery: state.searchQuery,
  };
};

export default connect(mapStateToProps)(Header);
