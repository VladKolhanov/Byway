import { Request } from 'express'

export type RequestWithBody<T> = Request<unknown, unknown, T>
export type RequestWithQuery<T> = Request<unknown, unknown, unknown, T>
export type RequestWithParams<T> = Request<T>
