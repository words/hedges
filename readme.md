# hedges

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *supposed* English (both British and American) hedge words.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`hedges`](#hedges-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a list of [hedge][wiki] words, which are typically used
to introduce ambiguity or indecisiveness.

## When should I use this?

Use this when you want to do fun things with natural language.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install hedges
```

In Deno with [`esm.sh`][esmsh]:

```js
import {hedges} from 'https://esm.sh/hedges@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {hedges} from 'https://esm.sh/hedges@2?bundle'
</script>
```

## Use

```js
import {hedges} from 'hedges'

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

This package exports the identifier `hedges`.
There is no default export.

### `hedges`

*Roughly*, **hedges** exposes information as a list of strings
(`Array<string>`).

## Data

For a complete list of supported hedge words and phrases, *like*, see
[`data.txt`][data].

> 👉 **Note**: that the words listed in **hedges** are *speculated* to be
> hedges, although *perhaps* not.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — list of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — list of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — list of filler words
*   [`profanities`](https://github.com/words/profanities)
    — list of profane words
*   [`spache`](https://github.com/words/spache)
    — list of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — list of weasel words

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/hedges/workflows/main/badge.svg

[build]: https://github.com/words/hedges/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/hedges.svg

[coverage]: https://codecov.io/github/words/hedges

[downloads-badge]: https://img.shields.io/npm/dm/hedges.svg

[downloads]: https://www.npmjs.com/package/hedges

[size-badge]: https://img.shields.io/bundlephobia/minzip/hedges.svg

[size]: https://bundlephobia.com/result?p=hedges

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[data]: data.txt

[wiki]: https://en.wikipedia.org/wiki/Hedge_\(linguistics\)
