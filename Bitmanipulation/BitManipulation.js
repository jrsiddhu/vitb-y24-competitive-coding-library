// BigInt is used because JS's normal bitwise operators only work on 32 bits.
// Pass n as a BigInt (e.g. 5n) and k as a regular number.
class BitManipulation {
  static getBit(n, k) {
    return (n >> BigInt(k)) & 1n;
  }

  static setBit(n, k) {
    return n | (1n << BigInt(k));
  }

  static clearBit(n, k) {
    return n & ~(1n << BigInt(k));
  }

  static toggleBit(n, k) {
    return n ^ (1n << BigInt(k));
  }

  static isPowerOfTwo(n) {
    return n > 0n && (n & (n - 1n)) === 0n;
  }

  static countSetBits(n) {
    let count = 0;
    while (n > 0n) {
      n &= n - 1n;
      count++;
    }
    return count;
  }
}