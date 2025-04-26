// Return an input string that outputs a SHA-256 hash that starts with 00000
// The input string must start with 100xdevs

import crypto from "crypto";

let hash = "";
function findInputString() {
  const inputPrefix = "100xdevs";
  const hashPrefix = "00000";
  let i = 0;

  while (true) {
    hash = crypto
      .createHash("sha-256")
      .update(inputPrefix + i)
      .digest("hex");

    if (hash.startsWith(hashPrefix)) break;

    i++;
  }

  return inputPrefix + i;
}

const input = findInputString();
console.log(`input: ${input}`);
console.log(`hash: ${hash}`);

// The substring that succeeds the prefix in the input string,
// such that, the resulting hash has leading zeroes is called the nonce.
// The nonce in this case is the 'i' value.

// Nonce is a string that is added to the input in order to
// get a hash value that has leading zeroes.

