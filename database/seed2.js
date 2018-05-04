const faker = require('faker');
const Places = require('./index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apateez-sidebar');

const getFullData = () => {
  const randomizer = faker.random.number({ min: 1, max: 11 });
  const seedData = (counter) => {
    let amRandom = faker.random.number({ min: 6, max: 11 });
    let pmRandomizer = faker.random.number({ min: 1, max: 12 });
    let latitude = faker.fake('{{address.latitude}}');
    let longitude = faker.fake('{{address.longitude}}');
    let temp = {
      id: counter,
      name: faker.fake('{{company.companyName}}'),
      menu_url: 'http://google.com',
      address: `${faker.fake('{{address.streetAddress}}')}, ${faker.fake('{{address.city}}')}, ${faker.fake('{{address.stateAbbr}}')}, ${faker.fake('{{address.zipCode}}')}, `
      + 'USA',
      location: `https://www.google.com/maps/@${latitude},${longitude},15z`,
      url: `http://www.${faker.fake('{{lorem.word}}')}.com`,
      phone: faker.fake('{{phone.phoneNumber}}'),
      hours: [`Monday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
        `Tuesday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
        `Wednesday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
        `Thursday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
        `Friday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
        `Saturday: ${randomizer}:00 AM - ${randomizer}:00 PM`,
        'Sunday: Closed',
      ],
      coords: {
        lat: latitude,
        lng: longitude,
      },
    };
    Places.create(temp, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const count = counter + 1;
        if (counter < 9000000) {
          temp = undefined;
          amRandom = undefined;
          pmRandomizer = undefined;
          latitude = undefined;
          longitude = undefined;
          seedData(count);
        }
      }
    });
  };
  seedData(8000000);
};

getFullData();
