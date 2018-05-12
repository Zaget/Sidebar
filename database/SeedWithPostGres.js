const pgp = require('pg-promise')({
  capSQL: true, // generate capitalized SQL
});
const faker = require('faker');


const db = pgp(/* connection details */{
  host: 'localhost',
  port: 5432,
  database: 'Zaget',
  user: 'mrmac',
}); // your database object

// Creating a reusable/static ColumnSet for generating INSERT queries:
const cs = new pgp.helpers.ColumnSet([
  'id',
  'name',
  'address',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
  'location',
  'url',
  'phone',
  'lat',
  'lng',
], { table: 'zagnar' });


const randomFunction = (makeId) => {
  const amRandom = faker.random.number({ min: 6, max: 11 });
  const pmRandomizer = faker.random.number({ min: 1, max: 12 });
  const randomizer = faker.random.number({ min: 1, max: 12 });
  const latitude = faker.fake('{{address.latitude}}');
  const longitude = faker.fake('{{address.longitude}}');
  const obj = {
    id: makeId,
    name: faker.fake('{{company.companyName}}'),
    address: `${faker.fake('{{address.streetAddress}}')}, ${faker.fake('{{address.city}}')}, ${faker.fake('{{address.stateAbbr}}')}, ${faker.fake('{{address.zipCode}}')}, `
    + 'USA',
    monday: `${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
    tuesday: `${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
    wednesday: `${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
    thursday: `${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
    friday: `${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
    saturday: `${amRandom}:00 AM - ${randomizer}:00 PM`,
    sunday: 'Closed',
    location: `https://www.google.com/maps/@${latitude},${longitude},15z`,
    url: `http://www.${faker.fake('{{lorem.word}}')}.com`,
    phone: faker.fake('{{phone.phoneNumber}}'),
    lat: latitude,
    lng: longitude,
  };
  return obj;
};


// const insert = pgp.helpers.insert(data, cs);

const getNextData = (t, pageIndex) => {
  let data = null;
  if (pageIndex < 1000) {
    data = [];
    for (let i = 0; i < 10000; i += 1) {
      const idx = pageIndex * 10000 + i;
      data.push(randomFunction(idx));
    }
  }
  return Promise.resolve(data);
};


db.tx('massive-insert', t => t.sequence(index => getNextData(t, index)
  .then((data) => {
    if (data) {
      const insert = pgp.helpers.insert(data, cs);
      return t.none(insert);
    }
  })))
  .then((data) => {
    // COMMIT has been executed
    console.log('Total batches:', data.total, ', Duration:', data.duration);
  })
  .catch((error) => {
    // ROLLBACK has been executed
    console.log(error);
  });

exports.randomFunction = randomFunction