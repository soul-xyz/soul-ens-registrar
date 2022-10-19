import fs from "fs";
import { program } from 'commander'
import { parseBalanceMap } from './parse-balance-map'

program
  .version('0.0.0')
  .option(
    '-i, --input <path>',
    'input JSON file location containing a map of account addresses to string balances'
  )

program.parse(process.argv)

console.log(program.opts().input);

const json = JSON.parse(fs.readFileSync(program.opts().input, { encoding: 'utf8' }))

console.log({json});

if (typeof json !== 'object') throw new Error('Invalid JSON')

console.log(JSON.stringify(parseBalanceMap(json)))