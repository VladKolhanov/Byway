import bcrypt from 'bcrypt'

import { StudentSchema } from '@/models'
import { RegistrationInputData, UpdateProfileInputData } from '@/types/inputs'
import { IStudent } from '@/types/models'
import { ErrorMessages } from '@/utils/constants'
import { CreateStudentDTO } from '@/utils/dtos'
import { ErrorConstructor, checkValidId, isTruthy } from '@/utils/helpers'

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

  return await StudentSchema.create(newStudent)
}

const updateProfile = async (
  inputData: UpdateProfileInputData,
): Promise<IStudent> => {
  const { id } = inputData

  checkValidId(id)

  const updatedProfile = await StudentSchema.findByIdAndUpdate(id, inputData, {
    new: true,
  })

  if (!updatedProfile)
    throw ErrorConstructor.notFoundData(ErrorMessages.PROFILE_NOT_EXIST)

  return updatedProfile
}

const deleteProfile = async (id: string): Promise<IStudent> => {
  checkValidId(id)

  const deletedProfile = await StudentSchema.findByIdAndDelete(id)

  if (!deletedProfile)
    throw ErrorConstructor.notFoundData(ErrorMessages.PROFILE_NOT_EXIST)

  return deletedProfile
}

export default { getListStudents, registration, updateProfile, deleteProfile }
