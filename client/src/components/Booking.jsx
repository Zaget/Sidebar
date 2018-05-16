import React from 'react';
import { Icon } from 'react-materialize';

const Booking = () => (
  <a href="http://www.google.com" target="_blank">
    <div className="btns"><span className="buttonText">  BOOK WITH OPENTABLE  </span>
      <Icon className="icons bookingIcon" right />
    </div>
  </a>
);

export default Booking;
