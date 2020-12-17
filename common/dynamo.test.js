const Dynamo = require('./dynamo');

test('Dynamo is an object', () => {
  expect(typeof Dynamo).toBe('object');
});

test('Dynamo has getMoviesList function', () => {
  expect(typeof Dynamo.getMoviesList).toBe('function');
});

let resp = null;
test('Dynamo getMoviesList returns movie array', async () => {
  expect.assertions(2);
  try {
    const tableName = 'movies-db';
    resp = await Dynamo.getMoviesList(tableName);
    expect(typeof resp).toBe('object');
    expect(resp).toHaveProperty('length');
  } catch (err) {
    console.log('error in testing filled DynamoDB for movie data', err);
  }
});
