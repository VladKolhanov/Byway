import { isValidObjectId } from 'mongoose'

import { ErrorMessages } from '../constants'
import { ErrorConstructor } from './ErrorConstructor'

export const checkValidId = (id: string) => {
  if (!id || !isValidObjectId(id))
    throw ErrorConstructor.badRequest(ErrorMessages.NOT_VALID_REQUEST)
}
