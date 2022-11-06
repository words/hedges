import fs from 'node:fs'
import {toJson} from 'plain-text-data-to-json'

const doc = fs.readFileSync('data.txt', 'utf8')

fs.writeFileSync(
  'index.js',
  '/**\n * List of *supposed* English (both British and American) hedge words.\n */\nexport const hedges = ' +
    JSON.stringify(toJson(doc), null, 2) +
    '\n'
)
