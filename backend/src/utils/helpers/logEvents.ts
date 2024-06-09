import { format } from 'date-fns'
import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'
import { v4 as uuid } from 'uuid'

const PATH_LOGS_DIR = path.join(__dirname, '..', 'logs')

export const logEvents = async (event: string, fileName: string) => {
  const eventDate = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
  const eventItem = `${eventDate}\t${uuid()}\t${event}\n`

  try {
    if (!fs.existsSync(PATH_LOGS_DIR)) {
      await fsPromises.mkdir(PATH_LOGS_DIR)
    }

    await fsPromises.appendFile(path.join(PATH_LOGS_DIR, fileName), eventItem)
  } catch (err) {
    console.log(err)
  }
}
