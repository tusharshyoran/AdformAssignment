import React from 'react';
import DateRangeSelector from './DateRangeSelector';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import renderer from 'react-test-renderer';

describe('DatePicker Test', () => {
  it('should render <DateRangeSelector/> component', () => {
    const dateComp = renderer
      .create(
        <Provider store={store}>
          <DateRangeSelector />
        </Provider>
      )
      .toJSON();
    expect(dateComp).toMatchSnapshot();
  });
});
