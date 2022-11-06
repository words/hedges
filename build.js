import fs from 'node:fs'
import {toJson} from 'plain-text-data-to-json'

const doc = fs.readFileSync('data.txt', 'utf8')

fs.writeFileSync(
  'index.js',
  'export const hedges = ' + JSON.stringify(toJson(doc), null, 2) + '\n'
)
