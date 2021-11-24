## Example
npm i hirez-signature-ts
```typescript
import {HirezSignature} from 'hirez-signature-ts'

const { signature, timestamp } = HirezSignature.createSignature({
  hirezAuthKey: 'your api key',
  hirezDevId: 'your dev id',
  method: 'createsession',
})

```