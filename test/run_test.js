/**
 * Test case for run.
 * Runs with mocha.
 */
'use strict'

const { SqliteDriver } = require('clay-driver-sqlite')
const filedel = require('filedel')
const run = require('../lib/run.js')
const assert = require('assert')
const co = require('co')

describe('run', function () {
  this.timeout(300000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sqlite', () => co(function * () {
    let storage = `${__dirname}/../tmp/benchmark-run-test.db`
    yield filedel(storage)
    let driver = new SqliteDriver(storage, {
      // logging: console.log
    })
    yield run(driver)
  }))
})

/* global describe, before, after, it */
