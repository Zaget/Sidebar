// // const request = require('request');
// const initData = require('./195-Zagat-AllData.json');
// // const rp = require('request-promise')
// // const fs = require('fs');
// const Places = require('./index.js');
// const Promise = require('bluebird');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/apateez-sidebar');


// getFullData = (places) => {
//   let counter = 0;
//   // Promise.map(places, function(place) {
//   //     var options = {
//   //         uri: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.result.place_id}&key=AIzaSyDkBAx39pJ0ccyXA-TWN-FmevHc87mznAM`,
//   //         headers: {
//   //             'User-Agent': 'Request-Promise'
//   //       },
//   //       json: true
//   //   }
//   // return rp(options)
//   //   .then((data) => {
//   const seedData = () => {
//     const temp = {
//       id: counter,
//       name: places[counter].result.name,
//       menu_url: 'http://google.com',
//       address: places[counter].result.formatted_address,
//       location: places[counter].result.url,
//       url: places[counter].result.website,
//       phone: places[counter].result.international_phone_number,
//       hours: places[counter].result.opening_hours ? places[counter].result.opening_hours.weekday_text : null,
//       coords: {
//         lat: places[counter].result.geometry.location.lat,
//         lng: places[counter].result.geometry.location.lng,
//       },
//     };

//     Places.create(temp, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         counter += 1;
//         if (counter < 1000) {
//           seedData();
//         }
//     });
//   };
//   seedData();
// };

// getFullData(initData);

// module.exports = getFullData;
