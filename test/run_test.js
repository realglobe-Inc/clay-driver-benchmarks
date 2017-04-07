/**
 * Test case for run.
 * Runs with mocha.
 */
'use strict'

const { MemoryDriver } = require('clay-driver-memory')
const run = require('../lib/run.js')
const co = require('co')

describe('run', function () {
  this.timeout(300000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sqlite', () => co(function * () {
    let driver = new MemoryDriver({
      // logging: console.log
    })
    yield run(driver)
  }))
})

/* global describe, before, after, it */
