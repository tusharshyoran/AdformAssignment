import React from 'react';
import { shallow } from 'enzyme';
import { ReduxProvider } from './utility';
import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(
      <ReduxProvider>
        <App />
      </ReduxProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
