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
  'menu_url',
  'address',
  'hours',
  'location',
  'url',
  'phone',
  'lat',
  'lng',
], { table: 'zag' });


const data = [
  {
    id: 0,
    name: 'test',
    menu_url: 'test2',
    address: 'address',
    hours: '{{yolo, 1]}, {too, 3}}',
    location: 'locat',
    url: 'url',
    phone: 'phone',
    lat: '11.11',
    lng: '12.11',
  },
];

const insert = pgp.helpers.insert(data, cs);

function getNextData(t, pageIndex) {
  let data = null;
  if (pageIndex < 1000) {
    data = [];
    for (let i = 0; i < 10000; i += 1) {
      const idx = pageIndex * 10000 + i; // to insert unique product names
      const amRandom = faker.random.number({ min: 6, max: 11 });
      const pmRandomizer = faker.random.number({ min: 1, max: 12 });
      const randomizer = faker.random.number({ min: 1, max: 12 });
      const latitude = faker.fake('{{address.latitude}}');
      const longitude = faker.fake('{{address.longitude}}');
      data.push({
        id: idx,
        name: 'test',
        menu_url: 'test2',
        address: 'address',
        hours: [`Monday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
          `Tuesday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
          `Wednesday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
          `Thursday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
          `Friday: ${amRandom}:00 AM - ${pmRandomizer}:00 PM`,
          `Saturday: ${amRandom}:00 AM - ${randomizer}:00 PM`,
          'Sunday: Closed'],
        location: `locat${latitude}`,
        url: 'url',
        phone: 'phone',
        lat: latitude,
        lng: longitude,
      });
    }
  }
  return Promise.resolve(data);
}


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

