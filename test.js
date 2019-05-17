'use strict';

var test = require('tape');
var hedges = require('.');

test('hedges', function (t) {
  t.equal(typeof hedges, 'object', 'should be an array #1');
  t.equal(Array.isArray(hedges), true, 'should be an array #2');
  t.notEqual(hedges.indexOf('appear'), -1, 'should contain words');

  t.end();
});
