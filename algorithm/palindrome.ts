function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const s: string = x.toString();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// function isPalindrome(x: number): boolean {
//     if (x < 0) return false;
//     const s: number = Number(x.toString().split('').reverse().join(''));
//     if (!(s === x)) {
//         return false;
//     }
//     return true;
// }

console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(-121));
console.log(isPalindrome(12321));
