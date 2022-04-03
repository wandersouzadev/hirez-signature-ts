import { createHash } from "crypto";
import { SignatureParams } from "../types";

export class HirezSignature {
  /**
   * Return formatted timestamp yyyyMMddHHmmss
   * @returns string
   */
  static createTimestamp(): string {
    const now = new Date();
    return (
      now.getUTCFullYear().toString().padStart(2, "0") +
      (now.getUTCMonth() + 1).toString().padStart(2, "0") +
      now.getUTCDate().toString().padStart(2, "0") +
      now.getUTCHours().toString().padStart(2, "0") +
      now.getUTCMinutes().toString().padStart(2, "0") +
      now.getUTCSeconds().toString().padStart(2, "0")
    );
  }
  /**
   * Return signature and timestamp ready to use in api calls
   * @param  SignatureParams
   */

  static createSignature({
    hirezDevId,
    method,
    hirezAuthKey,
  }: SignatureParams) {
    const timestamp = this.createTimestamp();
    return {
      signature: createHash("md5")
        .update(`${hirezDevId}${method}${hirezAuthKey}${timestamp}`)
        .digest("hex"),
      timestamp,
    };
  }
}
