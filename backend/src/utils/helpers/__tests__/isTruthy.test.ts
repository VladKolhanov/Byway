import { isTruthy } from '../isTruthy';

describe('isTruthy', () => {
  test('should return true for truthy primitive values', () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy('non-empty string')).toBe(true);
  });

  test('should return false for falsy primitive values', () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy('')).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
  });

  test('should return true for an empty object', () => {
    expect(isTruthy({})).toBe(true);
  });

  test('should return true for an object with only truthy values', () => {
    expect(isTruthy({ a: 1, b: 'test', c: true })).toBe(true);
  });

  test('should return false for an object with any falsy value', () => {
    expect(isTruthy({ a: 1, b: '', c: true })).toBe(false);
    expect(isTruthy({ a: 0, b: 'test', c: true })).toBe(false);
  });

  test('should return true for nested objects with only truthy values', () => {
    expect(isTruthy({ a: { b: { c: 1 } } })).toBe(true);
    expect(isTruthy({ a: { b: { c: 'test' } } })).toBe(true);
  });

  test('should return false for nested objects with any falsy value', () => {
    expect(isTruthy({ a: { b: { c: 0 } } })).toBe(false);
    expect(isTruthy({ a: { b: { c: '' } } })).toBe(false);
    expect(isTruthy({ a: { b: { c: false } } })).toBe(false);
  });

  test('should return true for an array with only truthy values', () => {
    expect(isTruthy([1, 'test', true])).toBe(true);
  });

  test('should return false for an array with any falsy value', () => {
    expect(isTruthy([1, '', true])).toBe(false);
    expect(isTruthy([0, 'test', true])).toBe(false);
  });

  test('should handle complex nested structures', () => {
    expect(isTruthy({ a: [1, { b: 'test', c: { d: true } }] })).toBe(true);
    expect(isTruthy({ a: [1, { b: '', c: { d: true } }] })).toBe(false);
  });
});
