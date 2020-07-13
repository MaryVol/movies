import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, reducer, combineReducers } from "redux";
import allReducers from "./components/allReducers";
import chooseMovie from "./components/MoviesReducer";
import toggleChange from "./components/ToggleReducer";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(chooseMovie(id));
// store.dispatch(toggleChange(value));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
