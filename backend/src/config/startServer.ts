import { Express } from 'express'

import { runDB } from '@/config/runDB'

const PORT = process.env.PORT || 3300

export const startServer = async (app: Express) => {
  await runDB()

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
