export interface ICreateStudentDTO {
  firstName: string
  lastName: string
  fullName: string
  userName: string
  password: string
  repeatedPassword: string
  email: string
  composFullName: () => string
}
