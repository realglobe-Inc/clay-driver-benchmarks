/**
 * Benchmark tests for clay drivers
 * @module clay-driver-benchmarks
 * @version 2.0.2
 */

'use strict'

const run = require('./run')
const cases = require('./cases')

let lib = run.bind(this)

Object.assign(lib, run, {
  run,
  cases
})

module.exports = lib
