import React from "react";
import CampaignTable from "./CampTable";
import { Provider } from "react-redux";
import store from "../../redux/store";
import renderer from "react-test-renderer";

describe("Campaign List", () => {
  it("should render Campaign List correctly", () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <CampaignTable />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
