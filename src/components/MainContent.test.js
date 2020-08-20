import MainContent from "./MainContent";
import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElement,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./storeCreate";

beforeEach(() => {
  render(
    <Provider store={store()}>
      <MainContent />
    </Provider>
  );
});

test("movies render", movierender);

async function movierender() {
  const filmName = await waitForElement(() =>
    screen.getAllByTestId("moviespage")
  );
  fireEvent.click(screen.getByText("Transformers 7"));
  expect(screen.getByText(/Plot/)).toBeInTheDocument();
  expect(store.similarMovies[0].genres).toEqual(
    store.currentMovie.genres
  );
}


