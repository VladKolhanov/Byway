import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

import { config } from './config'

export default async function globalSetup() {
  if (config.Memory) {
    const instance = await MongoMemoryServer.create()
    const uri = instance.getUri()
    ;(global as any).__MONGOINSTANCE = instance
    process.env.DATABASE_URI = uri.slice(0, uri.lastIndexOf('/'))
  } else {
    process.env.DATABASE_URI = `mongodb://${config.IP}:${config.Port}`
  }

  const conn = await mongoose.connect(
    `${process.env.DATABASE_URI}/${config.Database}`,
  )

  await conn.connection.db.dropDatabase()
  await mongoose.disconnect()
}
