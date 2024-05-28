import { NextFunction, Request, Response } from 'express'

import { logEvents, ErrorConstructor } from '@/utils'
import { ErrorMessages, StatusCodes } from '@/config'

export const errorHandler = async (
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
