import express from 'express'

import adminRoutes from '@/routes/adminRoutes'
import rootController from '@/controllers/rootController'
import errorController from '@/controllers/errorController'

const router = express.Router()

router.get('^/$|/index(.html)?', rootController)

router.use(adminRoutes)

router.all('*', errorController)

export default router
