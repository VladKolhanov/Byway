import { ConnectOptions } from 'mongoose'

export const uri = process.env.DATABASE_URI

export const clientOptions: ConnectOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
}
