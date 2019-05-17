# hedges

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *supposed* English (both British and American) hedge words.

## Installation

[npm][]:

```bash
npm install hedges
```

## Usage

```js
var hedges = require('hedges')

console.log(hedges.length) //=> 162

console.log(hedges.slice(0, 10))
```

Yields:

```js
[ 'a bit',
  'about',
  'actually',
  'allege',
  'alleged',
  'almost',
  'almost never',
  'always',
  'and all that',
  'and so forth' ]
```

## API

### `hedges`

*Roughly*, **hedges** exposes information as a list of strings
(`Array.<string>`).

## Support

For a complete list of supported hedge words and phrases, *like*, see
[data.txt][data].

Note that the words listed in **hedges** are *speculated* to be hedges,
although *perhaps* not.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — List of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — List of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — List of filler words
*   [`profanities`](https://github.com/words/profanities)
    — List of profane words
*   [`spache`](https://github.com/words/spache)
    — List of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/hedges.svg

[build]: https://travis-ci.org/words/hedges

[downloads-badge]: https://img.shields.io/npm/dm/hedges.svg

[downloads]: https://www.npmjs.com/package/hedges

[size-badge]: https://img.shields.io/bundlephobia/minzip/hedges.svg

[size]: https://bundlephobia.com/result?p=hedges

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[data]: data.txt
