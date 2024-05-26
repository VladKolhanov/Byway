import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import path from 'path'
import 'tsconfig-paths/register'

import { corsOptions } from '@/config/corsOptions'
import { runDB } from '@/config/runDB'
import { errorHandler } from '@/middleware/errorHandler'
import { logger } from '@/middleware/logger'
import router from '@/routes'

const PORT = process.env.PORT || 3300
const app = express()

app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
runDB()
app.use(express.static(path.join(__dirname, 'public')))
app.use(errorHandler)

const startServer = async () => {
  await runDB()

  app.use(router)

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer().catch((err) => {
  console.error(`Failed to start server: ${err.message}`)
})
