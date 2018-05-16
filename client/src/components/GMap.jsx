import React from 'react';

const GMap = (props) => {
  const mapLink = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCCkDYJwmT1_aBIYFxjGPHgw1hKI9Jjk4I&center=${props.lat},${props.lng}&maptype=satellite`;
  return (
    <div className="staticMap">
      <iframe
        frameBorder="0"
        style={{ border: 0 }}
        src={mapLink}
        allowFullScreen
      />
    </div>
  );
};

export default GMap;
