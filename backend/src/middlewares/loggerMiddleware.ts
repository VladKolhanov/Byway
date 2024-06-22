import { NextFunction, Request, Response } from 'express'

import { logEvents } from '@/utils/helpers'

export const loggerMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  await logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin}`,
    'reqLog.log',
  )

  console.log(`${req.method} ${req.path}`)

  next()
}
