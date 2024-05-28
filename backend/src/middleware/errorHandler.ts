import { NextFunction, Request, Response } from 'express'

import { logEvents } from '@/utils/logEvents'
import { ErrorConstructor } from '@/utils/ErrorConstructor'
import { ErrorMessages } from '@/config/errorMessages'
import { StatusCodes } from '@/config/statusCodes'

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
