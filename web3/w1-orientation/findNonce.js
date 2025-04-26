// What if I ask you to find a nonce for the following input -
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

import crypto from "crypto";

const input = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`;
let hash = "";

function findNonce(input) {
  let nonce = 0;

  while (true) {
    hash = crypto
      .createHash("sha-256")
      .update(input + nonce)
      .digest("hex");

    if (hash.startsWith("00000")) break;

    nonce++;
  }

  return nonce;
}

const nonce = findNonce(input);
console.log(`input: ${input}`);
console.log(`nonce: ${nonce}`);
console.log(`hash: ${hash}`);

// In this way, the crypto miners need to continuously solve this mathematical problem
// of finding the nonce as different input values are passed, 
// which in case of blockchain is the transaction data
// so that when the current block's transaction data is hashed along with the nonce and the previous block hash,
// the resulting hash would have leading zeroes.