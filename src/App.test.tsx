import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    const store = createMockStore()({
      shows: {
        shows: [],
        favorites: [],
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("app")).toBeInTheDocument();
  });
});
