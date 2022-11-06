import assert from 'node:assert'
import test from 'node:test'
import {hedges} from './index.js'

test('hedges', function () {
  assert.equal(typeof hedges, 'object', 'should be an array #1')
  assert.equal(Array.isArray(hedges), true, 'should be an array #2')
  assert.notEqual(hedges.indexOf('appear'), -1, 'should contain words')
})
