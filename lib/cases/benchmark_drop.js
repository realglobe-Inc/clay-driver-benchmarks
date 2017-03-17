/**
 * Test drop method of driver
 * @function benchmarkDrop
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends benchmarkDrop */
function benchmarkDrop (driver, options = {}) {
  const RESOURCE_NAME = 'driver-benchmark-drop'
  return co(function * () {

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkDrop
