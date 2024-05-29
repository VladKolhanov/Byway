import { model, Schema } from 'mongoose'

import { IStudent } from '@/types/models'
import { Roles } from '@/config'

const StudentSchema = new Schema<IStudent>({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarImg: {
    type: String,
    default: 'default avatar',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  description: {
    trim: true,
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  roles: {
    type: [String],
    enum: Object.values(Roles),
    default: [Roles.STUDENT],
  },
  socialNetworks: {
    type: Map,
    of: String,
    default: new Map(),
  },
  coursesStudent: {
    type: [Schema.Types.ObjectId],
    ref: 'Course',
    default: [],
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now,
  },
  dateOfUpdate: {
    type: Date,
    default: Date.now,
  },
}).set('toObject', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  },
})

export default model<IStudent>('Student', StudentSchema)
