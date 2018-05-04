import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Hours from '../../client/src/components/Hours';

Enzyme.configure({ adapter: new Adapter() });


describe('Hours', () => {
  it('should be defined', () => {
    const hours = ['Open all day', 'Open all night'];

    const wrapper = shallow(<Hours
      hours={hours}
    />);
    expect(wrapper).toBeDefined();
  });
  it('should render correctly', () => {
    const hours = ['Open all day', 'Open all night'];

    const tree = shallow(<Hours
      hours={hours}
    />);
    expect(tree).toMatchSnapshot();
  });
});
