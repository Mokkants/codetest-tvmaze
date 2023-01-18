import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { SearchBar } from "../search-bar";

jest.useFakeTimers();
const debounceTimeInMS = 2000;

const onInputChange = jest.fn();

describe("SearchBar", () => {
  it("should render", () => {
    render(<SearchBar onInputChange={onInputChange} />);
    screen.getByTestId("search-bar");
  });

  it("should be possible to write into input field", () => {
    render(<SearchBar onInputChange={onInputChange} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    void userEvent
      .type(searchInput, "testing!")
      .then(() => expect(searchInput).toHaveValue("testing!"));
  });

  it("should display the search icon", () => {
    const { getByTestId } = render(<SearchBar onInputChange={onInputChange} />);
    const searchBar = getByTestId("search-bar");
    expect(searchBar).toContainElement(getByTestId("search-icon"));
  });

  it("should call the onInputChange function when the input value changes", () => {
    render(<SearchBar onInputChange={onInputChange} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Test" } });
    jest.advanceTimersByTime(debounceTimeInMS + 1);
    expect(onInputChange).toHaveBeenCalledWith("Test");
  });

  it("should call the onInputChange function when the user presses Enter", () => {
    render(<SearchBar onInputChange={onInputChange} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    void userEvent
      .type(searchInput, "Test")
      .then(() => userEvent.keyboard("[Enter]"))
      .then(() => expect(onInputChange).toHaveBeenCalledWith("Test"));
  });

  it("should debounce the onInputChange function", () => {
    render(<SearchBar onInputChange={onInputChange} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Test" } });
    fireEvent.change(searchInput, { target: { value: "Testing" } });
    expect(onInputChange).not.toHaveBeenCalled();
    jest.advanceTimersByTime(debounceTimeInMS + 1);
    expect(onInputChange).not.toHaveBeenCalledWith("Test");
    expect(onInputChange).toHaveBeenCalledWith("Testing");
  });
});
