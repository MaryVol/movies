import MainContent from "./MainContent";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "../actions";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'

test("main content", () => {
  let onchange = jest.fn();
  let onreturn = jest.fn();
  render(<MainContent onChange={onchange} onReturnBack={onreturn} />);
  fireEvent.click(screen.getByText("Avatar"));
  expect(
    screen.getByText((content) => content.startsWith("Lorem"))
  ).toBeInTheDocument();
  fireEvent.click(screen.getByText("Back"));
  expect(screen.getByText("Avatar")).toBeInTheDocument();
});
