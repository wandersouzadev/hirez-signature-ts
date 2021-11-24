import moment from 'moment'
import { createHash } from 'crypto'
import { SignatureParams } from '../types'

class HirezSignature {
  static createTimestamp(): string {
    return moment.utc().format('YYYYMMDDHHmmss')
  }

  static createSignature({
    hirezDevId,
    method,
    hirezAuthKey,
    timestamp = this.createTimestamp(),
  }: SignatureParams) {
    return {
      signature: createHash('md5')
        .update(`${hirezDevId}${method}${hirezAuthKey}${timestamp}`)
        .digest('hex'),
      timestamp,
    }
  }
}

export { HirezSignature }
