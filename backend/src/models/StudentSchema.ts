import { model, Schema } from 'mongoose'

const StudentSchema = new Schema({
  fullName: {
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
})

export default model('Student', StudentSchema)
