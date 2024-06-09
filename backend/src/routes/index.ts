import express from 'express'

import { errorController, rootController } from '@/controllers'

import adminRoutes from './adminRoutes'

const router = express.Router()

router.get('^/$|/index(.html)?', rootController)

router.use(adminRoutes)

router.all('*', errorController)

export default router
