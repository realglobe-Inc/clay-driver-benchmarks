/**
 * Test destroy method of driver
 * @function benchmarkDestroy
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends benchmarkDestroy */
function benchmarkDestroy (driver, options = {}) {
  const RESOURCE_NAME = 'driver-bchmk-destroy'
  return co(function * () {

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkDestroy
