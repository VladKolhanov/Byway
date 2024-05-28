import { ErrorMessages, StatusCodes } from '@/config'

interface IErrorConstructor {
  status: number
  message: string
}

export class ErrorConstructor extends Error implements IErrorConstructor {
  status
  message

  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }

  static badRequest(message: ErrorMessages) {
    return new ErrorConstructor(StatusCodes.BAD_REQUEST, message)
  }

  static notFoundData(message: ErrorMessages) {
    return new ErrorConstructor(StatusCodes.NOT_FOUND, message)
  }
}
