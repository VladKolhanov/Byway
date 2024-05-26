import { CorsOptions } from 'cors'
import { allowedOrigins } from '@/config/allowedOrigins'
import { statusCodes } from '@/config/statusCodes'

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: statusCodes.ok,
}