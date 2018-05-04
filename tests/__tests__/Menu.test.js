import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Menu from '../../client/src/components/Menu';

Enzyme.configure({ adapter: new Adapter() });

describe('Menu', () => {
  it('should be defined', () => {
    const menu_url = 'google.com';

    const wrapper = shallow(<Menu
      menu_url={menu_url}
    />);
    expect(wrapper).toBeDefined();
  });
  it('should render correctly', () => {
    const menu_url = 'google.com';

    const tree = shallow(<Menu
      menu_url={menu_url}
    />);
    expect(tree).toMatchSnapshot();
  });
});
