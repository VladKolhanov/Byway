import { NextFunction, Request, Response } from 'express'

import { ErrorMessages, StatusCodes } from '@/utils/constants'
import { ErrorConstructor, logEvents } from '@/utils/helpers'

export const errorMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers?.origin}`,
    'errLog.log',
  )

  if (err instanceof ErrorConstructor) {
    return res.status(err.status).json({ message: err.message })
  }

  return res
    .status(StatusCodes.UNKNOWN)
    .json({ message: ErrorMessages.UNKNOWN })
}
