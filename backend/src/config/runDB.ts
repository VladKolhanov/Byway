import mongoose from 'mongoose'

import { clientOptions, uri } from '@/config/dbSettings'
import { logEvents } from '@/utils/logEvents'
import { ErrorMessages } from '@/config/errorMessages'
import { ErrorConstructor } from '@/utils/ErrorConstructor'

export const runDB = async () => {
  try {
    if (!uri) throw ErrorConstructor.badRequest(ErrorMessages.WRONG_DB_URI)

    await mongoose.connect(uri, clientOptions)

    mongoose.connection.on('connected', async () => {
      try {
        await mongoose.connection.db.admin().command({ ping: 1 })
      } catch (pingError) {
        console.error('Ping command failed:', pingError.message)
      }
    })

    mongoose.connection.on('error', async (err) => {
      await logEvents(
        `${err.name}: ${err.code}\t${err.hostname}`,
        'mongoErr.log',
      )
      console.error('Connection error:', err.message)
    })

    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from MongoDB')
    })
  } catch (err) {
    await logEvents(`${err.name}: ${err.message}`, 'mongoErr.log')
    console.error(err.message)
    process.exit(1)
  }
}
