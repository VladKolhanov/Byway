import mongoose from 'mongoose'

beforeAll(async () => {
  await mongoose.connect(process.env['DATABASE_URI'] as string)
})

afterAll(async () => {
  await mongoose.disconnect()
})
