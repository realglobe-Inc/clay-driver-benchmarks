/**
 * Test update method of driver
 * @function benchmarkUpdate
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends benchmarkUpdate */
function benchmarkUpdate (driver, options = {}) {
  const RESOURCE_NAME = 'driver-benchmark-update'
  return co(function * () {

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkUpdate
