import { model, Schema } from 'mongoose'

const InstructorSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  about: {
    type: String,
    trim: true,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    trim: true,
    required: true,
  },
  coursesInstructor: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  dateOfInstructorCreation: {
    type: Date,
    default: Date.now,
  },
  dateOfInstructorUpdate: {
    type: Date,
    default: Date.now,
  },
})

export default model('Instructor', InstructorSchema)
