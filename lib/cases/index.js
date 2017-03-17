/**
 * Benchmark cases
 * @module cases
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get benchmarkCreate () { return d(require('./benchmark_create')) },
  get benchmarkDestroy () { return d(require('./benchmark_destroy')) },
  get benchmarkDrop () { return d(require('./benchmark_drop')) },
  get benchmarkList () { return d(require('./benchmark_list')) },
  get benchmarkOne () { return d(require('./benchmark_one')) },
  get benchmarkResources () { return d(require('./benchmark_resources')) },
  get benchmarkUpdate () { return d(require('./benchmark_update')) }
}
