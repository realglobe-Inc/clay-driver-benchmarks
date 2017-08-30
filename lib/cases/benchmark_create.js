/**
 * Test create method of driver
 * @function benchmarkCreate
 * @function run
 * @param {Driver} driver - Driver to benchmark
 * @param {Object} [options={}] - Optional settings
 * @throws {Error} Test fail error
 */
'use strict'

const co = require('co')
const colorprint = require('colorprint')

/** @lends benchmarkCreate */
function benchmarkCreate (driver, options = {}) {
  const RESOURCE_NAME = 'd-bchmk-create'
  return co(function * () {
    let {
      counts = [
        1,
        1,
        1,
        10,
        100,
        1000
      ]
    } = options
    for (let count of counts) {
      let startAt = new Date()
      for (let i = 0; i < count; i++) {
        yield driver.create(RESOURCE_NAME, { i })
      }
      let took = new Date() - startAt
      colorprint.trace(`[benchmarkCreate] count: ${count}, took: ${took}ms`)
    }
    yield driver.drop(RESOURCE_NAME)
  })
}

module.exports = benchmarkCreate
