import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import renderer from "react-test-renderer";

describe("App", () => {
  it("should render correctly", () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
