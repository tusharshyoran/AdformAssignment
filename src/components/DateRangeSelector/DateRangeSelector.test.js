import React from 'react';
import DateRangeSelector from './DateRangeSelector';
import { ReduxProvider } from '../../utility';
import renderer from 'react-test-renderer';

describe('DatePicker Test', () => {
  it('should render <DateRangeSelector/> component', () => {
    const dateComp = renderer
      .create(
        <ReduxProvider>
          <DateRangeSelector />
        </ReduxProvider>
      )
      .toJSON();
    expect(dateComp).toMatchSnapshot();
  });
});
