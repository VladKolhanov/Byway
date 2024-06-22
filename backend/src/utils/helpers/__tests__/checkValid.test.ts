import { checkValidId } from '../checkValidId';

describe('checkValid', () => {
  test('Should throw error if provide not valid id', () => {
    expect(() => checkValidId('d32d3a12a')).toThrow();
  });
});
