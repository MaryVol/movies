import MainContent from "./MainContent";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./storeCreate";

test("main content", () => {});
// let onreturn = jest.fn();
// render(<MainContent onReturnBack={onreturn} />);

beforeEach(() => {
  render(
    <Provider store={store()}>
      <MainContent />
    </Provider>
  );
});

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
