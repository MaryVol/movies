import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./components/storeCreate";
import { BrowserRouter, Route } from "react-router-dom";

// export const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <Route path="/" exact component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
