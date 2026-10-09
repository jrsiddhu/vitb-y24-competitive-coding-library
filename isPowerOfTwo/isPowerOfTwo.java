public static boolean isPowerOfTwo(long n) {
    // return true if n is a power of two, otherwise false
    int count = 0;
    while(n>0){
        n=(n & (n-1));
        count++;
    }
    if(count==1) return true;
    return false;
}