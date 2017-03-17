'use strict'

const clayDriverBenchmarks = require('clay-driver-benchmarks')
const { Driver } = require('clay-driver-base')

class CustomDriver extends Driver {
  /* ... */
}

{
  let driver = new CustomDriver({ /* ... */ })

  co(function * () {
    // Run all tests
    yield clayDriverBenchmarks.run(driver, {})
  }).catch((e) => {
    console.error('Test failed!')
    console.error(e)
  })
}
