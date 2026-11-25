import { existsSync } from 'node:fs'
import { join } from 'node:path'
export default defineEventHandler(() => existsSync(join(process.cwd(), 'public/files/Ahmed-Amasha-CV.pdf')))
