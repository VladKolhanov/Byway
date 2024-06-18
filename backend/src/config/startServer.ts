import { Express } from 'express'

import { runDB } from '@/config'

export const startServer = async (app: Express, port: string) => {
  await runDB()

  return app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}
