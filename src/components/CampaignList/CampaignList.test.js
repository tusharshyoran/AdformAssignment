import React from 'react';
import CampaignTable from './Camptable';
import { shallow } from 'enzyme';
import { ReduxProvider } from '../../utility';

describe('Campaign List', () => {
  it('should render Campaign List correctly', () => {
    const component = shallow(
      <ReduxProvider>
        <CampaignTable />
      </ReduxProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
