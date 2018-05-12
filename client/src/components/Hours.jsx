import React from 'react';
import { Icon } from 'react-materialize';
import moment from 'moment';


class Hours extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const makeNewMoment = moment().weekday();
    const currDay = this.props.hours[makeNewMoment - 1];

    return (
      <div className="wrap-collabsible">
        <Icon className="contactIcon schedule icons">schedule</Icon>
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle"><b>{currDay}</b></label>
        <div className="collapsible-content">
          <div className="content-inner">
            {this.props.hours.map((day) => {
            if (day === currDay) {
              return (
                <p className="day currentDay">
                  <b>
                    {day}
                  </b>
                </p>);
            }
            return (
              <p className="day">
                {day}
              </p>);
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Hours;
