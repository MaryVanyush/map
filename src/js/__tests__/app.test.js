import ErrorRepository from '../app';

test('check clase ErrorRepository', () => {
  const error = new ErrorRepository();
  const received = error.translate(2);
  const expected = 'error type';
  expect(received).toBe(expected);
});

test('check clase ErrorRepository with error code', () => {
  const error = new ErrorRepository();
  const received = error.translate(6);
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});
