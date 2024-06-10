import { NextFunction, Request, Response } from 'express'

import { studentsService } from '@/services'
import { RegistrationInputData, UpdateProfileInputData } from '@/types/inputs'
import { IStudent } from '@/types/models'
import { RequestWithBody, RequestWithParams } from '@/types/requests'
import { StatusCodes } from '@/utils/constants'

//TODO: create students service
//TODO: add nodemailer
//TODO: add limiter
//TODO: add validation inputs

/**
 *  @desc get list of all students
 *  @route GET /admin/students
 *  @access Private
 */
const getAllStudents = async (
  req: Request,
  res: Response<IStudent[]>,
  next: NextFunction,
) => {
  try {
    const users = await studentsService.getListStudents()

    res.status(StatusCodes.OK).json(users)
  } catch (err) {
    return next(err)
  }
}

/**
 * @desc create new student
 * @route POST /auth
 * @access Private
 */
const createStudent = async (
  req: RequestWithBody<RegistrationInputData>,
  res: Response<IStudent>,
  next: NextFunction,
) => {
  try {
    const createdStudent = await studentsService.registration(req.body)

    res.status(StatusCodes.CREATED).json(createdStudent)
  } catch (err) {
    return next(err)
  }
}

/**
 *  @desc update a student
 *  @route PATCH /student-profile
 *  @access Private
 */
const updateStudent = async (
  req: RequestWithBody<UpdateProfileInputData>,
  res: Response<IStudent>,
  next: NextFunction,
) => {
  try {
    const updatedStudent = await studentsService.updateProfile(req.body)

    res.status(StatusCodes.OK).json(updatedStudent)
  } catch (err) {
    return next(err)
  }
}

/**
 *  @desc delete a student
 *  @route DELETE /admin/students
 *  @access Private
 */
const deleteStudent = async (
  req: RequestWithParams<{ id: string }>,
  res: Response<IStudent>,
  next: NextFunction,
) => {
  try {
    const deletedProfile = await studentsService.deleteProfile(req.params.id)

    res.status(StatusCodes.OK).json(deletedProfile)
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
