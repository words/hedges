(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hedges = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  "a bit",
  "about",
  "actually",
  "allege",
  "alleged",
  "almost",
  "almost never",
  "always",
  "and all that",
  "and so forth",
  "apparent",
  "apparently",
  "appear",
  "appear to be",
  "appeared",
  "appears",
  "approximately",
  "around",
  "assume",
  "assumed",
  "assumes",
  "assumption",
  "at least",
  "basically",
  "be sure",
  "believe",
  "believed",
  "believes",
  "bunch",
  "can",
  "certain",
  "certainly",
  "clear",
  "clearly",
  "conceivably",
  "consider",
  "considered",
  "considers",
  "consistent with",
  "could",
  "couple",
  "definite",
  "definitely",
  "diagnostic",
  "don't know",
  "doubt",
  "doubtful",
  "effectively",
  "estimate",
  "estimated",
  "estimates",
  "et cetera",
  "evidently",
  "fairly",
  "few",
  "find",
  "finds",
  "found",
  "frequently",
  "generally",
  "guess",
  "guessed",
  "guesses",
  "hopefully",
  "if i'm understanding you correctly",
  "improbable",
  "in general",
  "in my mind",
  "in my opinion",
  "in my understanding",
  "in my view",
  "inconclusive",
  "indicate",
  "kind of",
  "largely",
  "like",
  "likely",
  "little",
  "look like",
  "looks like",
  "mainly",
  "many",
  "may",
  "maybe",
  "might",
  "more or less",
  "most",
  "mostly",
  "much",
  "must",
  "my impression",
  "my thinking is",
  "my understanding is",
  "necessarily",
  "occasionally",
  "often",
  "overall",
  "partially",
  "perhaps",
  "possibility",
  "possible",
  "possibly",
  "practically",
  "presumable",
  "presumably",
  "pretty",
  "probability",
  "probable",
  "probably",
  "quite",
  "quite clearly",
  "rare",
  "rarely",
  "rather",
  "read",
  "really",
  "roughly",
  "say",
  "says",
  "seem",
  "seemed",
  "seems",
  "seldom",
  "several",
  "should",
  "so far",
  "some",
  "somebody",
  "somehow",
  "someone",
  "something",
  "something or other",
  "sometimes",
  "somewhat",
  "somewhere",
  "sort of",
  "speculate",
  "speculated",
  "speculates",
  "suggest",
  "suggested",
  "suggestive",
  "suggests",
  "suppose",
  "supposed",
  "supposedly",
  "supposes",
  "surely",
  "tend",
  "their impression",
  "think",
  "thinks",
  "thought",
  "understand",
  "understands",
  "understood",
  "unlikely",
  "unsure",
  "usually",
  "virtually",
  "will",
  "would"
]
},{}],2:[function(require,module,exports){
'use strict';

/*
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/*
 * Data.
 */

var words;

words = require('./data/hedges.json');

/*
 * Expose hedges.
 */

module.exports = new Interface(words);

},{"./data/hedges.json":1,"datalist-interface":3}],3:[function(require,module,exports){
'use strict';

/**
 * An interface for a list of items.
 *
 * @constructor
 * @param {Array.<*>} values
 */
function DatalistInterface(values) {
    this.values = [];
    this.add.apply(this, values);
}

/**
 * Add all arguments.
 *
 * @this DatalistInterface
 * @return {DatalistInterface} - Self.
 */
function add(/* values... */) {
    var self;

    self = this;

    self.values.push.apply(self.values, arguments);

    return self;
}

/**
 * Remove all arguments.
 *
 * @this DatalistInterface
 * @return {DatalistInterface} - Self.
 */
function remove(/* values... */) {
    var values,
        index,
        position;

    values = this.values;
    index = arguments.length;

    while (index--) {
        position = values.indexOf(arguments[index]);

        if (position !== -1) {
            values.splice(position, 1);
        }
    }

    return this;
}

/**
 * Whether or not `value` is in context.
 *
 * @this DatalistInterface
 * @param {*} value
 * @return {boolean}
 */
function is(value) {
    return this.values.indexOf(value) !== -1;
}

/**
 * Get all values.
 *
 * @this DatalistInterface
 * @return {Array.<*>}
 */
function all() {
    return this.values.concat();
}

/**
 * Stringify all values.
 *
 * @this DatalistInterface
 * @return {string}
 */
function toString() {
    return this.values.toString();
}

/*
 * Expose methods on prototype.
 */

var datalistInterfacePrototype;

datalistInterfacePrototype = DatalistInterface.prototype;

datalistInterfacePrototype.add = add;
datalistInterfacePrototype.remove = remove;
datalistInterfacePrototype.is = is;
datalistInterfacePrototype.has = is;
datalistInterfacePrototype.all = all;
datalistInterfacePrototype.valueOf = all;
datalistInterfacePrototype.toJSON = all;
datalistInterfacePrototype.toString = toString;

/*
 * Expose `DatalistInterface`.
 */

module.exports = DatalistInterface;

},{}]},{},[2])(2)
});