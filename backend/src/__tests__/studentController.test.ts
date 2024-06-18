import request from 'supertest'

import { app } from '@/app'
import { ErrorMessages, StatusCodes } from '@/utils/constants'

const mockInputData = {
  fullName: {
    firstName: 'Test',
    lastName: 'Test',
  },
  userName: 'TestTest',
  password: '122334455',
  repeatedPassword: '122334455',
  email: 'test.test@gmail.com',
}

const mockInputDataWithExistsUSerName = {
  ...mockInputData,
  email: 'test1.test1@gmail.com',
}

const mockInputDataWithExistsEmail = {
  ...mockInputData,
  userName: 'Test1Test1',
}

const mockInputDataWithNotDuplicatePassword = {
  ...mockInputData,
  repeatedPassword: '12345',
}
const mockInputDataWithEmptyFields = {
  ...mockInputData,
  userName: '',
  email: '',
}

const mockGetListStudents = jest.fn(() => Promise.resolve([mockInputData]))

jest.mock('@/services', () => {
  const actualServices = jest.requireActual('@/services')
  return {
    ...actualServices,
    studentService: {
      ...actualServices.studentService,
      getListStudents: jest.fn(() => mockGetListStudents()),
    },
  }
})

describe('GET /student', () => {
  test('Should respond json with array of students without field "password" and status code 200', async () => {
    const res = await request(app)
      .get('/student')
      .set('Accept', 'application/json')

    expect(res.status).toEqual(StatusCodes.OK)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body).toHaveLength(1)
  })
})

describe('POST /student/registration', () => {
  test('Should create new student if got correct input data', async () => {
    const res = await request(app)
      .post('/student/registration')
      .send(mockInputData)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.CREATED)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(typeof res.body === 'object').toBe(true)

    expect(res.body).toHaveProperty('_id')
    expect(res.body).toHaveProperty('__v')
  })

  test('Should return error if userName exists', async () => {
    const res = await request(app)
      .post('/student/registration')
      .send(mockInputDataWithExistsUSerName)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.WRONG_EXISTS_USER_NAME)
  })

  test('Should return error if not all fields filled', async () => {
    const res = await request(app)
      .post('/student/registration')
      .send(mockInputDataWithEmptyFields)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.ALL_FIELDS_REQUIRED)
  })

  test('Should return error if student with such email exists', async () => {
    const res = await request(app)
      .post('/student/registration')
      .send(mockInputDataWithExistsEmail)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.WRONG_EXISTS_EMAIL)
  })

  test('Should return error if user passed not duplicate passwords', async () => {
    const res = await request(app)
      .post('/student/registration')
      .send(mockInputDataWithNotDuplicatePassword)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.WRONG_COMPARE_PASS)
  })
})

describe('PATCH /student/profile', () => {
  let id: string

  beforeAll(async () => {
    const res = await request(app)
      .post('/student/registration')
      .send({
        ...mockInputData,
        userName: 'Test2Test2',
        email: 'test2.test2@gmail.com',
      })

    id = res.body._id
  })

  test('Should update profile of student if profile exists', async () => {
    const res = await request(app)
      .patch('/student/profile')
      .send({ id, description: 'test description' })
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.OK)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(typeof res.body === 'object').toBe(true)
    expect(res.body).toHaveProperty('_id')
  })

  test("Should return error if profile of student doesn't exists", async () => {
    const res = await request(app)
      .patch('/student/profile')
      .send({ id: '6667091a04c803821ca9216c', description: 'test description' })
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.NOT_FOUND)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.PROFILE_NOT_EXIST)
  })

  test('Should return error if not valid id', async () => {
    const res = await request(app)
      .patch('/student/profile')
      .send({ id: 'testNotCorrectId', description: 'test description' })
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.NOT_VALID_REQUEST)
  })
})

describe('DELETE /student/:id', () => {
  let id: string

  beforeAll(async () => {
    const res = await request(app)
      .post('/student/registration')
      .send({
        ...mockInputData,
        userName: 'TestDelTestDel',
        email: 'testDel.testDel@gmail.com',
      })

    id = res.body._id
  })

  test('Should delete student profile', async () => {
    const res = await request(app)
      .delete(`/student/${id}`)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.OK)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body).toHaveProperty('userName', 'TestDelTestDel')
    expect(res.body).toHaveProperty('email', 'testDel.testDel@gmail.com')
  })

  test("Should return error if profile of student doesn't exists", async () => {
    const res = await request(app)
      .delete(`/student/6667091a04c803821ca9216c`)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.NOT_FOUND)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.PROFILE_NOT_EXIST)
  })

  test('Should return error if not valid id', async () => {
    const res = await request(app)
      .delete(`/student/testNotCorrectId`)
      .set('Accept', 'application/json')

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body.message).toBe(ErrorMessages.NOT_VALID_REQUEST)
  })
})
