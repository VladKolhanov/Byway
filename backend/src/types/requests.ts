import { Request } from 'express'
import { RegistrationInputData } from '@/types/inputs'

export type RequestRegistration = Request<
  unknown,
  unknown,
  RegistrationInputData
>
