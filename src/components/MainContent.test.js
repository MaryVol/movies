import MainContent from "./MainContent";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./storeCreate";

// test("main content", () => {});
// // let onreturn = jest.fn();
// // render(<MainContent onReturnBack={onreturn} />);

beforeEach(() => {
  render(
    <Provider store={store()}>
      <MainContent />
    </Provider>
  );
});

const filmName = await waitForElement(() =>
  fireEvent.click(screen.getByText("Transformers"))
);
filmName
  .expect(
    screen.getByText((content) => content.toEqual(store.movieList[1].overview))
  )
  .toBeInTheDocument();

it(">>>check back button", () => {
  fireEvent.click(screen.getByText("Back"));
});

it(">>>check film list render", () => {
  expect(screen.getByText("Transformers")).toBeInTheDocument();
});

it(">>>check movie", () => {
  expect(store.currentMovie.toEqual(initialState.currentMovie));
});
