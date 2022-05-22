## About

hirez-signature-api is a helper for [Smite/Paladins/RealmRoyal api](https://webcdn.hirezstudios.com/hirez-studios/legal/smite-api-developer-guide.pdf).

## Usage

Using npm:

```bash
$ npm install hirez-signate-ts
```

Using yarn:

```bash
$ yarn add hirez-signate-ts
```

## Example

### JS

```js
const HirezSignatureTs = require("hirez-signature-ts").default;
```

### TS

```ts
import { HirezSignatureTs } from "hirez-signature-ts";
```

### Usage

```ts
// signature and timestamp ready for use
const { signature, timestamp } = HirezSignatureTs.createSignature({
  hirezAuthKey: "hirez auth key",
  hirezDevId: "hirez dev id",
  method: "any api method", // example: createsession
});
```
