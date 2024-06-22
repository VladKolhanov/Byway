import { ErrorMessages, StatusCodes } from '@/utils/constants';

import { ErrorConstructor } from '../ErrorConstructor';

describe('ErrorConstructor', () => {
  test('should create an instance with given status and message', () => {
    const status = 400;
    const message = 'Bad Request';
    const error = new ErrorConstructor(status, message);

    expect(error).toBeInstanceOf(ErrorConstructor);
    expect(error.status).toBe(status);
    expect(error.message).toBe(message);
  });

  test('should create a bad request error with appropriate status and message', () => {
    const message = ErrorMessages.NOT_VALID_REQUEST;
    const error = ErrorConstructor.badRequest(message);

    expect(error).toBeInstanceOf(ErrorConstructor);
    expect(error.status).toBe(StatusCodes.BAD_REQUEST);
    expect(error.message).toBe(message);
  });

  test('should create a not found error with appropriate status and message', () => {
    const message = ErrorMessages.STUDENT_NOT_FOUND;
    const error = ErrorConstructor.notFoundData(message);

    expect(error).toBeInstanceOf(ErrorConstructor);
    expect(error.status).toBe(StatusCodes.NOT_FOUND);
    expect(error.message).toBe(message);
  });
});
