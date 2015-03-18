# hedges [![Build Status](https://img.shields.io/travis/wooorm/hedges.svg?style=flat)](https://travis-ci.org/wooorm/hedges) [![Coverage Status](https://img.shields.io/coveralls/wooorm/hedges.svg?style=flat)](https://coveralls.io/r/wooorm/hedges?branch=master)

List of _supposed_ English (both British and American) hedge words.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install hedges
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/hedges
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install hedges
```

[Duo](http://duojs.org/#getting-started):

```javascript
var hedges = require('wooorm/hedges');
```

UMD: globals, AMD, and CommonJS ([uncompressed](hedges.js) and [compressed](hedges.min.js)):

```html
<script src="path/to/hedges.js"></script>
<script>
  console.log(hedges);
</script>
```

## Usage

```javascript
var hedges = require('hedges');

hedges.is('approximately'); // true
hedges.is('hedges'); // false

hedges.add('unicorn');
hedges.is('unicorn'); // true

hedges.remove('unicorn');
hedges.is('unicorn'); // false
```

## API

_Roughly_, **hedges** exposes information using [the datalist-interface API](https://github.com/wooorm/datalist-interface#api).

## Supported words

For a complete list of supported hedge words and phrases, _like_, see [Support.md](Support.md).

Note that the words listed in **hedges** are _speculated_ to be hedges, although _perhaps_ not.

## Related

- [buzzwords](https://github.com/wooorm/buzzwords) — List of buzzwords;
- [fillers](https://github.com/wooorm/fillers) — List of filler words;
- [profanities](https://github.com/wooorm/profanities) — List of profane words;
- [weasels](https://github.com/wooorm/weasels) — List of weasel words.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
