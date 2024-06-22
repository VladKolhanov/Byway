import mongoose from 'mongoose';

import { app } from '@/app';
import { closeServer, startServer } from '@/config';

beforeAll(async () => {
  process.env.NODE_ENV === 'test';
  await mongoose.connect(process.env['DATABASE_URI'] as string);
  await startServer(app, 3030);
});

afterAll(async () => {
  process.env.NODE_ENV === 'production';
  await mongoose.disconnect();
  await closeServer();
  console.log('Closed server');
});
