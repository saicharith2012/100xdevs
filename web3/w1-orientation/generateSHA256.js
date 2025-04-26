import crypto from "crypto";

const input = "100xdevs2274885";

const resultingHash = crypto.createHash("sha-256").update(input).digest("hex");
console.log(resultingHash);
console.log(resultingHash.length) // 256 bit string encoded to 64 hex digits.
