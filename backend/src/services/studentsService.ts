import bcrypt from 'bcrypt'

import { RegistrationInputData } from '@/types/inputs'
import { IStudent } from '@/types/models'
import { StudentSchema } from '@/models'
import { ErrorConstructor, isTruthy } from '@/utils'
import { ErrorMessages } from '@/config'
import { CreateStudentDTO } from '@/dtos'

const getListStudents = async (): Promise<IStudent[]> => {
  const students = await StudentSchema.find().select('-password').exec()

  return students.map((student) => student.toObject())
}

const registration = async (
  inputData: RegistrationInputData,
): Promise<IStudent> => {
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
    return await StudentSchema.create(newStudent)
  } catch {
    throw ErrorConstructor.badRequest(ErrorMessages.WRONG_CREATED_STUDENT)
  }
}

export default { getListStudents, registration }
