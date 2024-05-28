import { Request } from 'express'
import { RegistrationInputData } from './inputs'

export type RequestRegistration = Request<
  unknown,
  unknown,
  RegistrationInputData
>
