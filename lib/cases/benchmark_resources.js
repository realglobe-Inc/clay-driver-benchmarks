/**
 * Test resources method of driver
 * @function benchmarkResources
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends benchmarkResources */
function benchmarkResources (driver, options = {}) {
  const RESOURCE_NAME = 'driver-bchmk-resources'
  return co(function * () {
    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkResources
