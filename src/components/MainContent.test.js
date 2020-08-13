import MainContent from "./MainContent";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./storeCreate";



// it(">>>check back button", () => {
//   fireEvent.click(screen.getByText("Back"));
// });

// it(">>>check film list render", () => {
//   expect(screen.getByText("Transformers")).toBeInTheDocument();
// });

// it(">>>check movie", () => {
//   expect(store.currentMovie.toEqual(initialState.currentMovie));
// });

beforeEach(() => {
  render(
    <Provider store={store()}>
      <MainContent />
    </Provider>
  );
});

// let onreturn = jest.fn();
// render(<MainContent onReturnBack={onreturn} />);

test("main content", () => {
async function movierender() {
  const filmName = await waitForElement(
    () => getByText(container, "Transformers"),
    { container }
  );
  fireEvent.click(filmName);
  filmName
    .expect(
      screen.getByText((content) =>
        content.toEqual(store.movieList[1].overview)
      )
    )
    .toBeInTheDocument();
}

async function samegenres() {
  const filmGenre = await waitForElement(
    () => getByText(container, store.movieList[1].genres),
    { container }
  );
  filmGenre.expect(store.movieList.genres.toEqual(store.movieList[1].genres));
}
});
