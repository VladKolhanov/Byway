import { ErrorMessages, StatusCodes } from '@/utils/constants'

import mock from '../mocks/studentMocks'
import {
  FAKE_STUDENT_ID,
  NOT_CORRECT_ID,
  deleteRequestWithParams,
  expectBadRequests,
  expectNotFoundRequests,
  postRequestWithBody,
} from './utils'

describe('DELETE /student/:id', () => {
  let id: string

  beforeAll(async () => {
    const res = await postRequestWithBody(mock.mockDeleteTest)

    id = res.body._id
  })

  test('Should delete student profile', async () => {
    const res = await deleteRequestWithParams(id)

    expect(res.status).toBe(StatusCodes.OK)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(res.body).toHaveProperty('userName', 'deleteStudent')
    expect(res.body).toHaveProperty('email', 'deleteStudent@gmail.com')
  })

  test("Should return error if profile of student doesn't exists", async () => {
    const res = await deleteRequestWithParams(FAKE_STUDENT_ID)

    expectNotFoundRequests(res, ErrorMessages.PROFILE_NOT_EXIST)
  })

  test('Should return error if not valid id', async () => {
    const res = await deleteRequestWithParams(NOT_CORRECT_ID)

    expectBadRequests(res, ErrorMessages.NOT_VALID_REQUEST)
  })
})
