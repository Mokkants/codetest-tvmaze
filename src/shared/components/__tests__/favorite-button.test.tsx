import { render, screen } from "@testing-library/react";
import React from "react";
import { FavoriteButton } from "..";

describe("FavoriteButton", () => {
  const props = {
    isFavorite: false,
    setIsFavorite: (val: boolean) => val,
  };

  const setIsFavoriteMock = jest.fn();

  beforeEach(() => {
    setIsFavoriteMock.mockClear();
  });

  test("renders component", () => {
    const { getByTestId } = render(
      <FavoriteButton {...props}></FavoriteButton>
    );
    expect(getByTestId("favorite-button")).toBeInTheDocument();
  });

  it("should render a button with a star icon", () => {
    render(
      <FavoriteButton
        isFavorite={false}
        setIsFavorite={setIsFavoriteMock}
      ></FavoriteButton>
    );
    const button = screen.getByTestId("favorite-button");
    expect(button).toContainElement(screen.getByTestId("StarIcon"));
  });

  it("should render text if hideText is not passed", () => {
    render(
      <FavoriteButton
        isFavorite={false}
        setIsFavorite={setIsFavoriteMock}
      ></FavoriteButton>
    );
    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveTextContent("Add to favorites");
  });

  it("should not render text if hideText is passed", () => {
    render(
      <FavoriteButton
        isFavorite={false}
        setIsFavorite={setIsFavoriteMock}
        hideText={true}
      ></FavoriteButton>
    );
    const button = screen.getByTestId("favorite-button");
    expect(button).not.toHaveTextContent("Add to favorites");
  });
});
