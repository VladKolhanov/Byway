import { logEvents } from '@/utils/logEvents'
import { NextFunction, Request, Response } from 'express'

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

  console.log(err.stack)

  const status = res.statusCode || 500

  res.status(status)
  res.json({ message: err.message })

  next()
}
