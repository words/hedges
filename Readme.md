# hedges [![Build Status](https://travis-ci.org/wooorm/hedges.svg?branch=master)](https://travis-ci.org/wooorm/hedges) [![Coverage Status](https://img.shields.io/coveralls/wooorm/hedges.svg)](https://coveralls.io/r/wooorm/hedges?branch=master)

List of _supposed_ English (both British and American) hedge words.

## Installation

npm:
```sh
$ npm install hedges
```

Component.js:
```sh
$ component install wooorm/hedges
```

## Usage

```js
var hedges = require('hedges');

hedges.is('approximately'); // true
hedges.is('hedges'); // false

hedges.add('unicorn');
hedges.is('unicorn'); // true

hedges.remove('unicorn');
hedges.is('unicorn'); // false
```

## API

_Roughly_, **hedges** exports the following functions:

### hedges.is(word)

Returns whether (true) or not (false) a given word _might_ be a hedge word.

### hedges.add(word...)

_Effectively_ adds all arguments to the internal database.
Given values are **NOT** validated.

### hedges.remove(word...)

Removes all arguments from the internal database, _effectively_.
Given values are **NOT** validated.

### hedges.all()

_Surely_, return the values (as an Array) in the internal database.

## Supported words

For a complete list of supported hedge words and phrases, _like_, see [Supported-hedge-words.md](Supported-hedge-words.md).

Note that the words listed in **hedges** are _speculated_ to be hedges, although _perhaps_ not.

## Related

- [buzzwords](https://github.com/wooorm/buzzwords) — List of buzzwords;
- [fillers](https://github.com/wooorm/fillers) — List of filler words;
- [weasels](https://github.com/wooorm/weasels) — List of weasel words.

## License

MIT © Titus Wormer
