const Responses = require('./responses');

test('Responses is an object', () => {
  expect(typeof Responses).toBe('object');
});

test('Response _200 works', () => {
  const res = Responses._200({ foo: 'bar' });
  expect(res.statusCode).toBe(200);
  expect(typeof res.body).toBe('string');
  expect(res.headers['Content-Type']).toBe('application/json');
});

test('Response _400 works', () => {
  const res = Responses._400({ foo: 'bar' });
  expect(res.statusCode).toBe(400);
  expect(typeof res.body).toBe('string');
  expect(res.headers['Content-Type']).toBe('application/json');
});
