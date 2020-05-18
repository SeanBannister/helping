# Helping.js
This is a collection of generic Javascript functions that help in day to day programming. Many were collected from around the internet in which case attribution is included above the function. Please keep in mind that this collection was predominantly developed to meet my own needs.

## Requirements

To use this project in Node.js requires Node 12.17 or later. The [/dist/](https://github.com/SeanBannister/helping/tree/master/dist) directory contains ESM and UMD packages of the code for use outside of node, further details below.

**Browser support**
* **UMD Package :** [Details coming soon].
* **ESM Package :** [All browsers that support ES Modules.](https://caniuse.com/#feat=es6-module)

## Installation

**NPM :** ` npm install helping`\
**Yarn :** ` yarn add helping`

## Usage

No default export is provided, each function should be imported individually. A list of functions are available in the [documentation](https://doxdox.org/seanbannister/helping).

``` javascript
import { each, empty } from "helping";
```

## CDN

We use [jsDelivr](https://www.jsdelivr.com) for CDN access, check the [/dist/](https://www.jsdelivr.com/package/npm/helping?path=dist) directory for a full list of files provided. If you're targeting newer browsers use the ES Module or for older browsers use the UMD package. Both minified and unminified versions are provided.

**ES Module:**
```html
<script type="module">
  import {each, empty} from 'https://cdn.jsdelivr.net/npm/helping@latest/dist/helping.min.js';
  console.log(empty(''));
</script>
```

**UMD:**\
The UMD package provides all functions under a global namespace called `helping`, if you wish to access individual functions as globals assign them to to window object using this method:
```html
<script src="https://cdn.jsdelivr.net/npm/helping@latest/dist/helping.umd.min.js"></script>
<script>
  window.empty = helping.empty;
  console.log(empty(''));
</script>
```


## Documentation

Documented using [JSDoc](https://jsdoc.app/) and available [here](https://doxdox.org/seanbannister/helping).



- [ ] Once Mocha supports ES Modules, write testing suite.

## Contributing

Pull requests are welcome. Please fix bugs or make improvements to existing code. I might be reluctant to add new features as this project was mostly developed to meet my own needs but feel free to open an issue to discuss.

## License
[ISC](https://choosealicense.com/licenses/isc/) © [Sean Bannister](https://github.com/SeanBannister/helping/blob/master/LICENSE.txt).
