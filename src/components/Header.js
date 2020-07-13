import React from "react";
import styles from "./Header.module.css";
import Searcher from "./Searcher";
import Toggle from "./Toggle";
import { connect } from "react-redux";

let searchByOptions = [
  { value: "release_date", displayName: "Release date" },
  { value: "rating", displayName: "Rating" },
];

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     names: "Search by",
  //     searchBy: "release_date",
  //     searchByOptions: [
  //       { value: "release_date", displayName: "Release date" },
  //       { value: "rating", displayName: "Rating" },
  //     ],
  //   };
  // }

  render() {
    return (
      <header>
        <div className={styles.container}>
          <h3>
            <b>netflix</b>roulette
          </h3>
          <h1>find your movie</h1>
          <Searcher />
          <Toggle
            name={this.state.names}
            options={this.state.searchByOptions}
            value={this.state.searchBy}
            onChange={(searchBy) => this.setState({ searchBy })}
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy
  };
};

export default connect(mapStateToProps)(Header);
