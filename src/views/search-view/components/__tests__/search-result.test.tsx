import {
  fireEvent,
  getByDisplayValue,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import { Show } from "src/models";
import { SearchResult } from "../";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const show: Show = {
  id: 1,
  name: "Test Show",
  image: {
    medium: "https://via.placeholder.com/150",
    original: "https://via.placeholder.com/150",
  },
  summary: "",
  genres: [],
};

const mockedUsedNavigate = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchResult", () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      shows: {
        shows: [],
        favorites: [],
      },
    });
  });

  it("should render", () => {
    render(
      <Provider store={store}>
        <SearchResult show={show} isFavorite={false}></SearchResult>
      </Provider>
    );
    screen.getByTestId("search-result");
  });

  it("should display the show name", () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchResult show={show} isFavorite={false}></SearchResult>
      </Provider>
    );
    const showName = getByText(show.name);
    expect(showName).toBeInTheDocument();
  });

  it("should dispatch an action to add a show as favorite when the favorite button is clicked", () => {
    render(
      <Provider store={store}>
        <SearchResult show={show} isFavorite={false}></SearchResult>
      </Provider>
    );
    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);
    expect(store.getActions()).toEqual([
      {
        type: "shows/addAsFavorite",
        payload: show,
      },
    ]);
  });

  it("should dispatch an action to remove a show as favorite when the favorite button is clicked and the show is already a favorite", () => {
    render(
      <Provider store={store}>
        <SearchResult show={show} isFavorite={true}></SearchResult>
      </Provider>
    );
    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);
    expect(store.getActions()).toEqual([
      {
        type: "shows/removeFavorite",
        payload: show.id,
      },
    ]);
  });
});
