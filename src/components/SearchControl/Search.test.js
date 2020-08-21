import React from 'react';
import { shallow } from 'enzyme';
import SearchControl from './SearchControl';
import renderer from 'react-test-renderer';

describe('Search', () => {
  it('should match the snapshot', () => {
    const component = renderer.create(<SearchControl />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should render search component', () => {
    const component = shallow(<SearchControl />);
    const wrapper = component.find('.search-right');
    expect(wrapper.length).toBe(1);
  });

  it('checks if right search text is shared', () => {
    const wrapper = shallow(<SearchControl searchText="Campaign 2" />);
    const searchValue = wrapper.find('input').props().value;
    expect(searchValue).toEqual('Campaign 2');
  });
});
