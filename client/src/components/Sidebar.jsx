import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.jsx';
import Booking from './Booking.jsx';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import GMap from './GMap.jsx';
import moment from 'moment';

const axios = require('axios');


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      id, name, address, monday, tuesday, wednesday, thursday, friday, saturday, sunday,
      location, url, phone, lat, lng,
    } = this.props.data[0];
    const makeNewMoment = moment().weekday();
    const hours = [`Monday: ${monday}`, `Tuesday: ${tuesday}`, `Wednesday: ${wednesday}`, `Thursday: ${thursday}`, `Friday: ${friday}`,
      `Saturday: ${saturday}`, `Sunday: ${sunday}`];
    const currDay = hours[makeNewMoment];
    return (
      <div className="sidebar">
        <Menu menuUrl={url} />
        <div className="greyBar" />
        <Booking />
        <div className="greyBar" />
        <div className="inSidebar">
          <Hours
            hours={hours}
          />
          <Contact
            address={address}
            phone={phone}
            website={url}
            lat={lat}
            lng={lng}
            id={id}
            name={name}
          />
          <GMap
            id={id}
            lat={lat}
            lng={lng}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;

