import bcrypt from 'bcrypt'

import StudentSchema from '@/models/StudentSchema'
import { RegistrationInputData } from '@/types/inputs'
import { ErrorConstructor } from '@/utils/ErrorConstructor'
import { ErrorMessages } from '@/config/errorMessages'
import { CreateStudentDTO } from '@/dtos/createStudentDTO'
import { isTruthy } from '@/utils/isTruthy'

const getListStudents = async () => {
  const students = await StudentSchema.find().select('-password').lean().exec()

  return students
}

const registration = async (inputData: RegistrationInputData) => {
  const { userName, email, password, repeatedPassword } = inputData

  const isDuplicateUserName = await StudentSchema.exists({ userName })
  const isExistsStudent = await StudentSchema.exists({ email })
  const isAllFieldsFilled = isTruthy(inputData)

  if (!isAllFieldsFilled)
    throw ErrorConstructor.badRequest(ErrorMessages.ALL_FIELDS_REQUIRED)
  if (password !== repeatedPassword)
    throw ErrorConstructor.badRequest(ErrorMessages.WRONG_COMPARE_PASS)
  if (isDuplicateUserName)
    throw ErrorConstructor.badRequest(ErrorMessages.WRONG_EXISTS_USER_NAME)
  if (isExistsStudent)
    throw ErrorConstructor.badRequest(ErrorMessages.WRONG_EXISTS_EMAIL)

  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  const newStudent = new CreateStudentDTO(inputData, hashPassword)

  try {
    const createdStudent = await StudentSchema.create(newStudent)

    return { createdStudent }
  } catch {
    throw ErrorConstructor.badRequest(ErrorMessages.WRONG_CREATED_STUDENT)
  }
}

export default { getListStudents, registration }
