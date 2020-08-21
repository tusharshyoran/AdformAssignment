import React from "react";
import CampaignTable from "./CampTable";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Campaign List", () => {
  it("should render Campaign List correctly", () => {
    const component = shallow(
      <Provider store={store}>
        <CampaignTable />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
