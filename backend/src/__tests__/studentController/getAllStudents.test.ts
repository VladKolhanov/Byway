import request from 'supertest'

import { app } from '@/app'
import { StatusCodes } from '@/utils/constants'

import mock from '../mocks/studentMocks'
import { postRequestWithBody } from './utils'

describe('GET /student', () => {
  beforeAll(async () => {
    await postRequestWithBody(mock.mockInputData)
  })

  test('Should respond json with array of students and status code 200', async () => {
    const res = await request(app)
      .get('/student')
      .set('Accept', 'application/json')

    expect(res.status).toEqual(StatusCodes.OK)
    expect(res.headers['content-type']).toMatch(/json/i)
    expect(Array.isArray(res.body)).toBe(true)

    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('id')
    }
  })
})
