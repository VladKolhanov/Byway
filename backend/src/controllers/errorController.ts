import { Request, Response } from 'express'
import path from 'path'

import { StatusCodes } from '@/utils/constants'

const ERROR_FILE_PATH = path.join(__dirname, '..', 'views', '404.html')

const errorController = (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND)

  if (req.accepts('html')) res.sendFile(ERROR_FILE_PATH)
  else if (req.accepts('json')) res.json({ message: '404 Not Found' })
  else res.type('txt').send('404 Not Found')
}

export default errorController
