export enum ErrorMessages {
  WRONG_DB_URI = "Can't connect to database. Check your uri.",
  WRONG_COMPARE_PASS = "Passwords don't compare",
  WRONG_EXISTS_USER_NAME = "A student exists with the following 'Username'",
  WRONG_EXISTS_EMAIL = 'A student with this email exists',
  WRONG_MATCH_SCHEMA = 'The student data sent does not match the scheme',
  ALL_FIELDS_REQUIRED = 'All fields must be fill ',
  STUDENT_NOT_FOUND = 'Student not found',
  UNKNOWN = 'Unknown error',
  NOT_VALID_REQUEST = 'Not a valid request',
  PROFILE_NOT_EXIST = 'Profile not exist',
}
