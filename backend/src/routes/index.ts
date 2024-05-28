import express from 'express'

import adminRoutes from './adminRoutes'
import { rootController, errorController } from '@/controllers'

const router = express.Router()

router.get('^/$|/index(.html)?', rootController)

router.use(adminRoutes)

router.all('*', errorController)

export default router
