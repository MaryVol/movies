import React, { Component } from "react";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainContent />
        </div>
      </Router>
    );
  }
}

export default App;
