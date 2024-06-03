export const isTruthy = (value: any): boolean => {
  const isObject = typeof value === 'object' && value !== null

  if (isObject) {
    for (const key in value) {
      const isOwnProperty = Object.hasOwn(value, key)
      const isCheckDeepObjectsResult = isTruthy(value[key])

      if (isOwnProperty && !isCheckDeepObjectsResult) {
        return false
      }
    }

    return true
  }

  return Boolean(value)
}
