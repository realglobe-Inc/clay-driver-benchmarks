/**
 * Run benchmark
 * @function run
 * @param {Driver} driver - Driver to test
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const cases = require('./cases')
const co = require('co')
const asleep = require('asleep')
const colorprint = require('colorprint')

/** @function run */
function run (driver, options = {}) {
  return co(function * () {
    for (let name of Object.keys(cases)) {
      let startAt = new Date()
      colorprint.info(`[clay-driver-benchmark] "${name}" started...`)
      yield cases[ name ](driver, options)
      let took = new Date() - startAt
      colorprint.info(`[clay-driver-benchmark] ..."${name}" done! (${took}ms)`)
      yield asleep(1)
    }
  })
}

module.exports = run
