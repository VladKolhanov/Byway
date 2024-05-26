import express from 'express'
import path from 'path'

import { statusCodes } from '@/config/statusCodes'

const INDEX_FILE_PATH = path.join(__dirname, '..', 'views', 'index.html')
const ERROR_FILE_PATH = path.join(__dirname, '..', 'views', '404.html')

const router = express.Router()

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(INDEX_FILE_PATH)
})

router.all('*', (req, res) => {
  res.status(statusCodes.notFound)

  if (req.accepts('html')) {
    res.sendFile(ERROR_FILE_PATH)
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

export default router
