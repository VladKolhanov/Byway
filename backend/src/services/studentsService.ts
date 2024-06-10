import bcrypt from 'bcrypt'

import { CreateStudentDTO } from '@/dtos'
import { StudentSchema } from '@/models'
import { RegistrationInputData, UpdateProfileInputData } from '@/types/inputs'
import { IStudent } from '@/types/models'
import { ErrorMessages } from '@/utils/constants'
import { ErrorConstructor, isTruthy } from '@/utils/helpers'

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
    throw ErrorConstructor.badRequest(ErrorMessages.WRONG_MATCH_SCHEMA)
  }
}

const updateProfile = async (
  inputData: UpdateProfileInputData,
): Promise<IStudent> => {
  const _id = inputData.id

  if (!_id) throw ErrorConstructor.badRequest(ErrorMessages.NOT_VALID_REQUEST)

  try {
    return (await StudentSchema.findByIdAndUpdate(_id, inputData, {
      new: true,
    })) as IStudent
  } catch {
    throw ErrorConstructor.notFoundData(ErrorMessages.PROFILE_NOT_EXIST)
  }
}

const deleteProfile = async (id: string) => {
  const _id = id

  if (!_id) throw ErrorConstructor.badRequest(ErrorMessages.NOT_VALID_REQUEST)

  try {
    await StudentSchema.findByIdAndDelete(_id)
  } catch {
    throw ErrorConstructor.notFoundData(ErrorMessages.PROFILE_NOT_EXIST)
  }
}

export default { getListStudents, registration, updateProfile, deleteProfile }
