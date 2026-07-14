# MetaTS

A TypeScript tool library providing common utilities and helpers.

## Features

- **TypeScript-first** — fully typed with strict mode enabled
- **Zero dependencies** — lightweight and fast
- **ESM + CJS dual support** — works with both `import` and `require`
- **Tree-shakeable** — only import what you need
- **Well-tested** — comprehensive test coverage

## Installation

```bash
npm install @abcnx/metats
```

## Usage

```typescript
// Import what you need
import { isNil, isEmpty, clamp } from '@abcnx/metats';

isNil(null);            // true
isEmpty([]);            // true
clamp(15, 0, 10);       // 10
```

### Modules

| Module      | Description                     | Key exports                                   |
|-------------|---------------------------------|-----------------------------------------------|
| `types`     | Shared TypeScript type helpers   | `DeepPartial`, `Constructor`, `Consumer`, ... |
| `utils`     | General-purpose utilities        | `isNil`, `isEmpty`, `clamp`, `debounce`, ...  |
| `array`     | Array manipulation helpers       | `chunk`, `unique`, `shuffle`, `groupBy`, ...  |
| `string`    | String manipulation helpers      | `camelCase`, `truncate`, `capitalize`, ...    |
| `object`    | Object manipulation helpers      | `deepClone`, `deepMerge`, `pick`, `omit`, ... |

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Run tests with watch mode
npm run test:watch

# Lint
npm run lint

# Format code
npm run format:fix
```

## License

Apache License 2.0
