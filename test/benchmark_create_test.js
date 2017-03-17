/**
 * Test case for benchmarkCreate.
 * Runs with mocha.
 */
'use strict'

const { SqliteDriver } = require('clay-driver-sqlite')
const benchmarkCreate = require('../lib/cases/benchmark_create.js')
const assert = require('assert')
const co = require('co')

describe('benchmark-create', function () {
  this.timeout(30000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Benchmark create', () => co(function * () {
    let storage = `${__dirname}/../tmp/benchmark-create-test.db`
    let driver = new SqliteDriver(storage)
    yield benchmarkCreate(driver)
  }))
})

/* global describe, before, after, it */
