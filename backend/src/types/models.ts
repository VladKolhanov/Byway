import { Document, Types } from 'mongoose'

import { Roles } from '@/config'
import { Languages } from "@/utils/constants"

//TODO: avatarImg Blob or string

export interface IStudent extends Document {
  firstName: string
  lastName: string
  fullName: string
  userName: string
  email: string
  password: string
  avatarImg: string
  verified: boolean
  description: string
  language: Languages
  roles: Roles[]
  socialNetworks: Map<string, string>
  coursesStudent: Types.ObjectId[]
  dateOfRegistration: Date
  dateOfUpdate: Date
  id?: string
}
