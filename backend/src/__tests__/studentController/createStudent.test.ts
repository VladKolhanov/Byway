import { ErrorMessages, StatusCodes } from '@/utils/constants'

import mock from '../mocks/studentMocks'
import { expectBadRequests, postRequestWithBody } from './utils'

describe('POST /student/registration', () => {
  test('Should create new student if got correct input data', async () => {
    const res = await postRequestWithBody(mock.mockPostTest)

    expect(res.status).toBe(StatusCodes.CREATED)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(typeof res.body === 'object').toBe(true)

    expect(res.body).toHaveProperty('_id')
    expect(res.body).toHaveProperty('__v')
  })

  test('Should return error if userName exists', async () => {
    const res = await postRequestWithBody(mock.mockPostTestWithExistsUSerName)

    expectBadRequests(res, ErrorMessages.WRONG_EXISTS_USER_NAME)
  })

  test('Should return error if not all fields filled', async () => {
    const res = await postRequestWithBody(mock.mockPostTestWithEmptyFields)

    expectBadRequests(res, ErrorMessages.ALL_FIELDS_REQUIRED)
  })

  test('Should return error if student with such email exists', async () => {
    const res = await postRequestWithBody(mock.mockPostTestWithExistsEmail)

    expectBadRequests(res, ErrorMessages.WRONG_EXISTS_EMAIL)
  })

  test('Should return error if user passed not duplicate passwords', async () => {
    const res = await postRequestWithBody(
      mock.mockPostTestWithNotDuplicatePassword,
    )

    expectBadRequests(res, ErrorMessages.WRONG_COMPARE_PASS)
  })
})
