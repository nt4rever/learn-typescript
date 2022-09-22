function extendPalindrome(s: string, j: number, k: number, lo: number, maxLen: number) {
    while (j >= 0 && k < s.length && s[j] === s[k]) {
        j--;
        k++;
    }
    if (maxLen < k - j - 1) {
        lo = j + 1;
        maxLen = k - j - 1;
    }
    return {
        lo,
        maxLen,
    };
}

function longestPalindrome(s: string): string {
    let lo = 0;
    let maxLen = 0;
    if (s.length < 2) {
        return s;
    }
    for (let i = 0; i < s.length - 1; i++) {
        const temp1 = extendPalindrome(s, i, i, lo, maxLen);
        lo = temp1.lo;
        maxLen = temp1.maxLen;
        const temp2 = extendPalindrome(s, i, i + 1, lo, maxLen);
        lo = temp2.lo;
        maxLen = temp2.maxLen;
    }

    return s.substring(lo, lo + maxLen);
}

console.log(longestPalindrome('cbbd'));
