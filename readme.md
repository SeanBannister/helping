# Helping.js
This is a collection of generic Javascript functions that help in day to day programming. Many were collected from around the internet in which case attribution is included above the function. Please keep in mind that this collection was predominantly developed to meet my own needs.

## Requirements

During development this project uses ECMAScript 6 features that require Node 12.17 or later. However the [/dist/](https://github.com/SeanBannister/helping/tree/master/dist) directory contains ESM and UMD packages of the code that are consumable everywhere, further details below.

**Browser support**
* **UMD Package :** Details coming soon.
* **ESM Package :** [All browsers that support ES Modules.](https://caniuse.com/#feat=es6-module)

## Installation

**NPM :** ` npm install helping`\
**Yarn :** ` yarn add helping`

## Usage

No default export is provided, each function should be imported individually. A list of functions are available in the [documentation](https://doxdox.org/seanbannister/helping).

``` javascript
import { each, empty } from "helping";
```

## Documentation

Documented using [JSDoc](https://jsdoc.app/) and available [here](https://doxdox.org/seanbannister/helping).

## Todo

- [ ] Once Mocha supports ES Modules, write testing suite.

## Contributing

Pull requests are welcome. Please fix bugs or make improvements to existing code. I might be reluctant to add new features as this project was mostly developed to meet my own needs but feel free to open an issue to discuss.

## License
[ISC](https://choosealicense.com/licenses/isc/) © [Sean Bannister](https://github.com/SeanBannister/helping/blob/master/LICENSE.txt).
