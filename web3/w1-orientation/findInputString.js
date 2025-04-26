// Return an input string that outputs a SHA-256 hash that starts with 00000.

import crypto from "crypto";

// Bruteforcing until the resulting hash starts with '00000'
let hash = "";
function findInputString() {
  let i = 1;
  while (true) {
    hash = crypto.createHash("sha-256").update(String(i)).digest("hex");
    if (hash.startsWith("00000")) break;
    i++;
  }

  return i;
}

const input = findInputString();

console.log(`input: ${input}`);
console.log(`hash: ${hash}`);
