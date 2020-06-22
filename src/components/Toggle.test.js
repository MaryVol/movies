import Toggle from "./Toggle";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

let time = {
  options: [
    { value: "release_date", displayName: "day" },
    { value: "rating", displayName: "night" },
  ],
};

test("object assignment", () => {
  let onchange = jest.fn();
  render(
    <Toggle
      options={time.options}
      value={time.options[0].value}
      onChange={onchange}
    />
  );
  expect(screen.getByLabelText("day").checked).toBe(true);
  expect(screen.getByLabelText("night").checked).toBe(false);
  fireEvent.click(screen.getByLabelText("night"));
  expect(onchange).toHaveBeenCalledTimes(1);
  expect(onchange).toHaveBeenCalledWith("rating");
});
