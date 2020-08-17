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
test("film genre test", filmgenre);

async function movierender() {
  const filmName = await waitForElement(() =>
    screen.getAllByTestId("moviespage")
  );
  fireEvent.click(screen.getByText("Transformers 7"));
  expect(screen.getByText(/Plot/)).toBeInTheDocument();
}

async function filmgenre() {
  const filmGenre = await waitFor(() => screen.getByTestId("moviegenre"));
  // expect(filmGenre).toEqual(/Action/)
  expect(store().getState().similarMovies.genres).toEqual(
    store().getState().currentMovie.genres
  );
}

// let onreturn = jest.fn();
// render(<MainContent onReturnBack={onreturn} />);

// it(">>>check back button", () => {
//   fireEvent.click(screen.getByText("Back"));
// });

// it(">>>check film list render", () => {
//   expect(screen.getByText("Transformers")).toBeInTheDocument();
// });

// it(">>>check movie", () => {
//   expect(store.currentMovie.toEqual(initialState.currentMovie));
// });
