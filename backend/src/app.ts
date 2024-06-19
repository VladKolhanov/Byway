import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import path from 'path';
import 'tsconfig-paths/register';

import { corsOptions, startServer } from '@/config';
import { errorMiddleware, loggerMiddleware } from '@/middlewares';
import router from '@/routes';

const ENV = process.env.NODE_ENV || 'production';

export const app = express();

app.use(loggerMiddleware);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.use(errorMiddleware);

if (ENV !== 'test') {
  startServer(app).catch((err) =>
    console.error(`Failed to start server: ${err.message}`),
  );
}
