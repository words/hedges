/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module hedges
 * @fileoverview Test suite for `hedges`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var hedges = require('./');

/* Tests. */
test('characterEntities', function (t) {
  t.equal(typeof hedges, 'object', 'should be an array #1');
  t.equal(Array.isArray(hedges), true, 'should be an array #2');
  t.notEqual(hedges.indexOf('appear'), -1, 'should contain words');

  t.end();
});
