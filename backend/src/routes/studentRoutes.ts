import express from 'express'

import { studentController } from '@/controllers'

//TODO: Refactoring this component
const router = express.Router()

router.get('/', studentController.getAllStudents)
router.post('/registration', studentController.createStudent)
// router.post('/student/authorization', studentController)
router.patch('/profile', studentController.updateStudent)
router.delete('/:id', studentController.deleteStudent)

export default router
