import express from 'express'

import { studentsController } from '@/controllers'

const router = express.Router()

router
  .route('/admin/students')
  .get(studentsController.getAllStudents)
  .post(studentsController.createStudent)
  .patch(studentsController.updateStudent)
  .delete(studentsController.deleteStudent)

export default router
