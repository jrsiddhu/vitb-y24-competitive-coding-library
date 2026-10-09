#include <cstdint>

class BitManipulation {
public:
    static int64_t getBit(int64_t n, int k) {
        return (n >> k) & 1LL;
    }

    static int64_t setBit(int64_t n, int k) {
        return n | (1LL << k);
    }

    static int64_t clearBit(int64_t n, int k) {
        return n & ~(1LL << k);
    }

    static int64_t toggleBit(int64_t n, int k) {
        return n ^ (1LL << k);
    }

    static bool isPowerOfTwo(int64_t n) {
        return n > 0 && (n & (n - 1)) == 0;
    }

    static int countSetBits(int64_t n) {
        int count = 0;
        while (n > 0) {
            n &= n - 1;
            count++;
        }
        return count;
    }
};