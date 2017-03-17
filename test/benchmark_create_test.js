/**
 * Test case for benchmarkCreate.
 * Runs with mocha.
 */
'use strict'

const { SqliteDriver } = require('clay-driver-sqlite')
const benchmarkCreate = require('../lib/cases/benchmark_create.js')
const assert = require('assert')
const filedel = require('filedel')
const co = require('co')

describe('benchmark-create', function () {
  this.timeout(30000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Benchmark create', () => co(function * () {
    let storage = `${__dirname}/../tmp/benchmark-create-test.db`
    yield filedel(storage)
    let driver = new SqliteDriver(storage, {
      logging: console.log
    })
    yield benchmarkCreate(driver)
  }))
})

/* global describe, before, after, it */
