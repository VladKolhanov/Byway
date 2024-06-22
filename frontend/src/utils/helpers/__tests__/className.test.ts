import { className } from '../className';

describe('className', () => {
  const stringMock = 'test1';
  const objMock = {
    test2: true,
    test3: false,
    test4: true,
    test5: false,
  };

  test('Should return string if provided string', () => {
    const result = className(stringMock);

    expect(result).toBe('test1');
  });

  test('Should return combine string of value object if have true', () => {
    const result = className(objMock);

    expect(result).toBe('test2 test4');
  });

  test('Should return empty string if provided undefined', () => {
    const result = className(undefined);

    expect(result).toBe('');
  });

  test('Should return combine string if provided different arguments', () => {
    const result = className(stringMock, objMock, undefined);

    expect(result).toBe('test1 test2 test4');
  });
});
