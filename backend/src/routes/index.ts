import express, { NextFunction, Request, Response } from 'express'
import path from 'path'

import { StatusCodes } from '@/utils/constants'

import studentRoutes from './studentRoutes'

const router = express.Router()

const INDEX_FILE_PATH = path.join(__dirname, '..', 'views', 'index.html')
const ERROR_FILE_PATH = path.join(__dirname, '..', 'views', '404.html')

router.get(
  '^/$|/index(.html)?',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(StatusCodes.OK).sendFile(INDEX_FILE_PATH)
    } catch (err) {
      return next(err)
    }
  },
)

router.use('/student', studentRoutes)

router.all('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND)

  if (req.accepts('html')) res.sendFile(ERROR_FILE_PATH)
  else if (req.accepts('json')) res.json({ message: '404 Not Found' })
  else res.type('txt').send('404 Not Found')
})

export default router
