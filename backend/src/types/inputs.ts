export interface RegistrationInputData {
  fullName: {
    firstName: string
    lastName: string
  }
  userName: string
  password: string
  repeatedPassword: string
  email: string
}
