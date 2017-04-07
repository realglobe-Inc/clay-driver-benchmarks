/**
 * Test case for benchmarkCreate.
 * Runs with mocha.
 */
'use strict'

const { MemoryDriver } = require('clay-driver-memory')
const benchmarkCreate = require('../lib/cases/benchmark_create.js')
const co = require('co')

describe('benchmark-create', function () {
  this.timeout(300000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Benchmark create', () => co(function * () {
    let driver = new MemoryDriver({
      logging: console.log
    })
    yield benchmarkCreate(driver)
  }))
})

/* global describe, before, after, it */
