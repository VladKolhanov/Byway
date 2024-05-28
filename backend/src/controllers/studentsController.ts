import { NextFunction, Request, Response } from 'express'

import { RequestRegistration } from '@/types/requests'
import { studentsService } from '@/services'
import { StatusCodes } from '@/config'

//TODO: create students service
//TODO: add nodemailer
//TODO: add limiter
//TODO: add validation inputs

// @desc get all students
// @route GET /admin/students
// @access Private
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await studentsService.getListStudents()

    res.status(StatusCodes.OK).json(users)
  } catch (err) {
    return next(err)
  }
}

// @desc create new student
// @route POST /admin/students
// @access Private
const createStudent = async (
  req: RequestRegistration,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { createdStudent } = await studentsService.registration(req.body)

    res.status(StatusCodes.CREATED).json(createdStudent)
  } catch (err) {
    return next(err)
  }
}

// @desc update a student
// @route PATCH /admin/student
// @access Private
const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('+')
  } catch (err) {
    return next(err)
  }
}

// @desc delete a student
// @route DELETE /admin/student
// @access Private
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('+')
  } catch (err) {
    return next(err)
  }
}

export default {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
}
