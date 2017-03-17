/**
 * Test list method of driver
 * @function benchmarkList
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')

/** @lends benchmarkList */
function benchmarkList (driver, options = {}) {
  const RESOURCE_NAME = 'driver-benchmark-list'
  return co(function * () {

    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkList
