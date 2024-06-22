import { ErrorMessages, StatusCodes } from '@/utils/constants'

import mock from '../mocks/studentMocks'
import {
  FAKE_STUDENT_ID,
  NOT_CORRECT_ID,
  TEST_DESCRIPTION,
  expectBadRequests,
  expectNotFoundRequests,
  patchRequestWithBody,
  postRequestWithBody,
} from './utils'

describe('PATCH /student/profile', () => {
  let id: string

  beforeAll(async () => {
    const res = await postRequestWithBody(mock.mockUpdateTest)

    id = res.body._id
  })

  test('Should update profile of student if profile exists', async () => {
    const res = await patchRequestWithBody({
      id,
      description: TEST_DESCRIPTION,
    })

    expect(res.status).toBe(StatusCodes.OK)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(typeof res.body === 'object').toBe(true)
    expect(res.body).toHaveProperty('_id')
  })

  test("Should return error if profile of student doesn't exists", async () => {
    const res = await patchRequestWithBody({
      id: FAKE_STUDENT_ID,
      description: TEST_DESCRIPTION,
    })

    expectNotFoundRequests(res, ErrorMessages.PROFILE_NOT_EXIST)
  })

  test('Should return error if not valid id', async () => {
    const res = await patchRequestWithBody({
      id: NOT_CORRECT_ID,
      description: TEST_DESCRIPTION,
    })

    expectBadRequests(res, ErrorMessages.NOT_VALID_REQUEST)
  })
})
