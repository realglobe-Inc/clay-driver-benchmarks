/**
 * Test one method of driver
 * @function benchmarkOne
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends benchmarkOne */
function benchmarkOne (driver, options = {}) {
  const RESOURCE_NAME = 'driver-bchmk-one'
  return co(function * () {

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkOne
