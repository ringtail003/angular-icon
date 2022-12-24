# angular-icon

Angular で SVG を読み込んでアイコン表示するコンポーネントのサンプル。

## Environment

### Angular & Node

```shell
> ./node_modules/.bin/ng version

Angular CLI: 15.0.4
Node: 18.12.1
Package Manager: npm 8.19.2
OS: darwin arm64
```

### Nx

Nx でアプリを 2 つ作成して挙動などを比較した。

アプリ名 | 説明 | コンポーネントの数
--- | --- | ---
`individual` | SVG を埋め込んだ個々のアイコンコンポーネントを宣言 | 🐖🐖🐖🐖🐖 🐖🐖🐖🐖🐖
`general` | SVG を動的に読み込むアイコンコンポーネント宣言 | 🐖

## Setup

```shell
npm ci
```

## Dev Server

🐖🐖🐖🐖🐖🐖🐖🐖🐖🐖

```shell
npm run dev:individual
```

🐖

```shell
npm run dev:general
```

## Build

🐖🐖🐖🐖🐖🐖🐖🐖🐖🐖

```shell
npm run build:individual
```

🐖

```shell
npm run build:general
```

## Benchmark

🐖🐖🐖🐖🐖🐖🐖🐖🐖🐖

```shell
$ npm run build:individual

Initial Chunk Files           | Names           |  Raw Size | Estimated Transfer Size
main.03ccc807f2089a28.js      | main            | 198.75 kB |                54.19 kB
polyfills.916ee973ae2107d0.js | polyfills       |  33.05 kB |                10.62 kB
runtime.d30e768dd1d12d89.js   | runtime         |   2.67 kB |                 1.26 kB
styles.ef46db3751d8e999.css   | styles          |   0 bytes |                       -

                              | Initial Total   | 234.46 kB |                66.07 kB

Lazy Chunk Files              | Names           |  Raw Size | Estimated Transfer Size
139.aecf1cd21cfeae0d.js       | page1-component |   4.21 kB |                 1.02 kB
356.14c37b58946ac863.js       | page2-component |   4.07 kB |                 1.05 kB

Build at: 2022-12-24T07:20:58.805Z - Hash: 4e931ade28defc93 - Time: 4249ms
```

🐖

```shell
$ npm run build:general

Initial Chunk Files           | Names           |  Raw Size | Estimated Transfer Size
main.9f042fee875d0998.js      | main            | 199.44 kB |                54.46 kB
polyfills.6c52e28b819608f1.js | polyfills       |  33.04 kB |                10.66 kB
runtime.76289519206c7ca0.js   | runtime         |   2.70 kB |                 1.29 kB
styles.ef46db3751d8e999.css   | styles          |   0 bytes |                       -

                              | Initial Total   | 235.18 kB |                66.40 kB

Lazy Chunk Files              | Names           |  Raw Size | Estimated Transfer Size
77.3f00fe3a2d4cbb51.js        | page1-component | 780 bytes |               380 bytes
624.b5f4145d6a6db555.js       | page2-component | 771 bytes |               379 bytes
common.4fbcb1a220114cf7.js    | common          | 610 bytes |               362 bytes

Build at: 2022-12-24T07:20:43.885Z - Hash: ef65a3154c00b123 - Time: 4311ms
```
