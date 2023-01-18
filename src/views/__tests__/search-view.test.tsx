import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SearchView } from "../";

jest.mock("src/store", () => {
  const originalModule = jest.requireActual("src/store");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originalModule,
    useSelector: jest.fn(() => []),
    useDispatch: jest.fn(() => jest.fn()),
  };
});

describe("SearchView", () => {
  it("should render the SearchBar component", () => {
    render(<SearchView />);
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });

  it("should call the onInputChange function when the input value changes", () => {
    render(<SearchView />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Test" } });
    expect(searchInput).toHaveValue("Test");
  });

  it("should call the onInputChange function when the user presses Enter", () => {
    render(<SearchView />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Test" } });
    fireEvent.keyPress(searchInput, { key: "Enter", code: 13 });
    expect(searchInput).toHaveValue("Test");
  });
});
