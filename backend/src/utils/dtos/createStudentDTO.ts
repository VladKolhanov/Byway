import { ICreateStudentDTO } from '@/types/dtos'
import { RegistrationInputData } from '@/types/inputs'

export class CreateStudentDTO implements ICreateStudentDTO {
  firstName: string
  lastName: string
  fullName: string
  userName: string
  password: string
  repeatedPassword: string
  email: string

  constructor(inputData: RegistrationInputData, hashPassword: string) {
    this.firstName = inputData.fullName.firstName
    this.lastName = inputData.fullName.lastName
    this.fullName = this.composFullName()
    this.userName = inputData.userName
    this.password = hashPassword
    this.repeatedPassword = inputData.repeatedPassword
    this.email = inputData.email
  }

  composFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
