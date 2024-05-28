import { Request, Response, NextFunction } from 'express'

import { logEvents } from '@/utils/logEvents'

export const logger = async (req: Request, _: Response, next: NextFunction) => {
  await logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin}`,
    'reqLog.log',
  )

  console.log(`${req.method} ${req.path}`)

  next()
}
