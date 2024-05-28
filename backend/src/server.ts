import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import path from 'path'
import 'tsconfig-paths/register'

import { corsOptions, startServer } from '@/config'
import { errorHandler, logger } from '@/middleware'
import router from '@/routes'

const app = express()

app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)
app.use(errorHandler)

startServer(app).catch((err) =>
  console.error(`Failed to start server: ${err.message}`),
)
