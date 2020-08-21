import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

describe("App", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
