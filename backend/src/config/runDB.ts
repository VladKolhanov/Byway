import { clientOptions, messages, uri } from '@/config/dbSettings'
import { logEvents } from '@/utils/logEvents'
import mongoose from 'mongoose'

export const runDB = async () => {
  try {
    if (!uri) throw new Error(messages.errorConnectURI)

    await mongoose.connect(uri, clientOptions)

    mongoose.connection.on('connected', async () => {
      try {
        await mongoose.connection.db.admin().command({ ping: 1 })
        console.log(messages.successfullyConnected)
      } catch (pingError) {
        console.error('Ping command failed:', pingError.message)
      }
    })

    mongoose.connection.on('error', async (err) => {
      await logEvents(err, 'mongoErr.log')
      console.error('Connection error:', err.message)
    })

    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from MongoDB')
    })
  } catch (err) {
    await logEvents(err, 'mongoErr.log')
    console.error(err.message)
    process.exit(1)
  }
}
