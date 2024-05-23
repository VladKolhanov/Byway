import 'tsconfig-paths/register'
import 'dotenv/config'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from '@routes/root'
import { logger } from '@middleware/logger'
import { errorHandler } from '@middleware/errorHandler'
import { corsOptions } from '@config/corsOptions'

const PORT = process.env.PORT || 3300
const app = express()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', router)

app.all('*', (req, res) => {
  res.status(404)

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server was started on port ${PORT}`)
})
