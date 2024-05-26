import { ConnectOptions } from 'mongoose'

export const messages = {
  errorConnectURI: "Can't connect to database. Check your uri.",
  successfullyConnected:
    'Pinged your deployment. You successfully connected to MongoDB!',
}

export const uri = process.env.DATABASE_URI

export const clientOptions: ConnectOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
}
