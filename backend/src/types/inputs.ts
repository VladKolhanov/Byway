import { Languages } from '@/utils/constants'

//TODO: avatarImg change later
interface RegistrationInputData {
  fullName: {
    firstName: string
    lastName: string
  }
  userName: string
  password: string
  repeatedPassword: string
  email: string
}

interface UpdateProfileInputData {
  id: string
  firstName?: string
  lastName?: string
  description?: string
  language?: Languages
  avatarImg?: string
  socialNetworks?: Map<string, string>
}

export { RegistrationInputData, UpdateProfileInputData }
