import MainContent from "./MainContent";
import React from "react";
import configureStore from "redux-mock-store";
import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "../actions";
import { Provider } from "react-redux";

test("main content", () => {
  const initialState = {
    currentMovie: null,
    movieList: [],
    sortBy: "release_date",
  };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MainContent />
      </Provider>
    );
  });
});
// let onreturn = jest.fn();
// render(<MainContent onReturnBack={onreturn} />);

it(">>>check description", () => {
  fireEvent.click(screen.getByText("Transformers"));
  expect(
    screen.getByText((content) =>
      content.toEqual(initialState.movieList[1].overview)
    )
  ).toBeInTheDocument();
});

it(">>>check back button", () => {
  fireEvent.click(screen.getByText("Back"));
});

it(">>>check film list render", () => {
  expect(screen.getByText("Transformers")).toBeInTheDocument();
});

it(">>>check movie", () => {
  expect(prop("currentMovie").toEqual(initialState.currentMovie));
});
