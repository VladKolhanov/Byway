import express from 'express'

import { studentsController } from '@/controllers'

//TODO: Refactoring this component
const router = express.Router()

router.route('/admin/students').get(studentsController.getAllStudents)

router.route('/admin/students/:id').delete(studentsController.deleteStudent)

router.route('/auth').post(studentsController.createStudent)

router.route('/student-profile').patch(studentsController.updateStudent)

export default router
