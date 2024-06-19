import { RegistrationInputData } from '@/types/inputs'

const mockInputData: RegistrationInputData = {
  fullName: {
    firstName: 'Test',
    lastName: 'Test',
  },
  userName: 'TestTest',
  password: '122334455',
  repeatedPassword: '122334455',
  email: 'test.test@gmail.com',
}

const mockPostTest: RegistrationInputData = {
  ...mockInputData,
  userName: 'postStudent',
  email: 'postStudent@gmail.com',
}

const mockPostTestWithExistsUSerName: RegistrationInputData = {
  ...mockPostTest,
  email: 'test1.test1@gmail.com',
}

const mockPostTestWithExistsEmail: RegistrationInputData = {
  ...mockPostTest,
  userName: 'Test1Test1',
}

const mockPostTestWithNotDuplicatePassword: RegistrationInputData = {
  ...mockPostTest,
  repeatedPassword: '12345',
}

const mockPostTestWithEmptyFields: RegistrationInputData = {
  ...mockPostTest,
  userName: '',
  email: '',
}

const mockUpdateTest: RegistrationInputData = {
  ...mockInputData,
  userName: 'updateStudent',
  email: 'updateStudent@gmail.com',
}

const mockDeleteTest: RegistrationInputData = {
  ...mockInputData,
  userName: 'deleteStudent',
  email: 'deleteStudent@gmail.com',
}

export default {
  mockInputData,
  mockPostTest,
  mockPostTestWithExistsUSerName,
  mockPostTestWithExistsEmail,
  mockPostTestWithNotDuplicatePassword,
  mockPostTestWithEmptyFields,
  mockUpdateTest,
  mockDeleteTest,
}
