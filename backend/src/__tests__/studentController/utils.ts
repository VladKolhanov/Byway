import request, { Response } from 'supertest'

import { app } from '@/app'
import { RegistrationInputData } from '@/types/inputs'
import { IStudent } from '@/types/models'
import { ErrorMessages, StatusCodes } from '@/utils/constants'

export const FAKE_STUDENT_ID = '6667091a04c803821ca9216c'
export const NOT_CORRECT_ID = 'testNotCorrectId'
export const TEST_DESCRIPTION = 'test description'

const postRequestWithBody = async (
  body: RegistrationInputData,
): Promise<Response> => {
  return await request(app)
    .post('/student/registration')
    .send(body)
    .set('Accept', 'application/json')
}

const patchRequestWithBody = async (
  body: Partial<IStudent>,
): Promise<Response> => {
  return await request(app)
    .patch('/student/profile')
    .send(body)
    .set('Accept', 'application/json')
}

const deleteRequestWithParams = async (id: string): Promise<Response> => {
  return await request(app)
    .delete(`/student/${id}`)
    .set('Accept', 'application/json')
}

const expectBadRequests = (res: Response, errorMessage: ErrorMessages) => {
  expect(res.status).toBe(StatusCodes.BAD_REQUEST)
  expect(res.headers['content-type']).toMatch(/json/i)
  expect(res.body.message).toBe(errorMessage)
}

const expectNotFoundRequests = (res: Response, errorMessage: ErrorMessages) => {
  expect(res.status).toBe(StatusCodes.NOT_FOUND)
  expect(res.headers['content-type']).toMatch(/json/i)
  expect(res.body.message).toBe(errorMessage)
}

export {
  postRequestWithBody,
  patchRequestWithBody,
  deleteRequestWithParams,
  expectBadRequests,
  expectNotFoundRequests,
}
