import path from 'path'
import { StatusCodes } from '@/config'
import { NextFunction, Request, Response } from 'express'

const INDEX_FILE_PATH = path.join(__dirname, '..', 'views', 'index.html')

const rootController = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(StatusCodes.OK).sendFile(INDEX_FILE_PATH)
  } catch (err) {
    return next(err)
  }
}

export default rootController
