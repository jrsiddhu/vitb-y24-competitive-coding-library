public static int countSetBits(long n) {
    // return the number of bits set to 1 in n (n >= 0)
    int count=0;
    while(n>0){
        if((n & 1) ==1){
            count++;
        }
        n>>=1;
    }
    return count;
}