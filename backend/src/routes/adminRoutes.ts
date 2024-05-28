import express from 'express'

import studentsController from '@/controllers/studentsController'

const router = express.Router()

router
  .route('/admin/students')
  .get(studentsController.getAllStudents)
  .post(studentsController.createStudent)
  .patch(studentsController.updateStudent)
  .delete(studentsController.deleteStudent)

export default router
