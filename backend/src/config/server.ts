import { Express } from 'express'
import { Server } from 'http'

import { runDB } from '@/config'

const PORT = process.env.PORT || '4080'

let server: Server

export const startServer = async (
  app: Express,
  port: number | string = PORT,
) => {
  await runDB()

  const serverInstance = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  server = serverInstance
}

export const closeServer = async () => {
  if (server) {
    server.close()
  } else {
    console.error('You must start the server before closing it!')
  }
}
