const q = require('../../database/SeedWithPostGres');


test('Random Function exists', () => {
  expect(q.randomFunction).toBeTruthy();
});

test('Random Function Creates an Id with an input', () => {
  const testNumber = 10;
  const pie = q.randomFunction(testNumber);
  expect(pie.id).toEqual(testNumber);
});

test('Random Function A random s', () => {
  const testNumber = 10;
  const pie = q.randomFunction(testNumber);
  expect(pie.id).toEqual(testNumber);
});

test('Random Function Creates A Random Name', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.name).toBe('string');
  expect(FirstRandom.name).not.toBe(SecondRandom.name);
});

test('Random Function Creates Random Closing and Opening Times', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.monday).toBe('string');
  expect(FirstRandom.monday).not.toBe(SecondRandom.monday);
});

test('Random Function Creates Random Address', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.address).toBe('string');
  expect(FirstRandom.address).not.toBe(SecondRandom.address);
});


test('Random Function Creates A Random url', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.url).toBe('string');
  expect(FirstRandom.url).not.toBe(SecondRandom.url);
});

test('Random Function Creates A Random Phone', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.phone).toBe('string');
  expect(FirstRandom.phone).not.toBe(SecondRandom.phone);
});

test('Random Function Creates A Random Latitutde', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.lat).toBe('string');
  expect(FirstRandom.lat).not.toBe(SecondRandom.lat);
});

test('Random Function Creates A Random Longitude', () => {
  const testNumber1 = 10;
  const testNumber2 = 11;
  const FirstRandom = q.randomFunction(testNumber1);
  const SecondRandom = q.randomFunction(testNumber2);
  expect(typeof FirstRandom.lng).toBe('string');
  expect(FirstRandom.lng).not.toBe(SecondRandom.lng);
});
