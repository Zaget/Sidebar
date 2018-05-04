import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Contact from '../../client/src/components/Contact';

Enzyme.configure({ adapter: new Adapter() });


describe('Contact', () => {
  it('should be defined', () => {
    const address = '944 Market St';
    const phone = '888-8888';
    const website = 'google.com';
    const location = 'SF';
    const id = '1234';
    const name = 'Hack Reactor';

    const wrapper = shallow(<Contact
      address={address}
      phone={phone}
      website={website}
      location={location}
      id={id}
      name={name}
    />);
    expect(wrapper).toBeDefined();
  });
  it('should render correctly', () => {
    const address = '944 Market St';
    const phone = '888-8888';
    const website = 'google.com';
    const location = 'SF';
    const id = '1234';
    const name = 'Hack Reactor';

    const tree = shallow(<Contact
      address={address}
      phone={phone}
      website={website}
      location={location}
      id={id}
      name={name}
    />);
    expect(tree).toMatchSnapshot();
  });
});
