function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let p1 = 0;
    let p2 = 0;
    const set: Set<string> = new Set();
    while (p2 < s.length) {
        if (!set.has(s[p2])) {
            set.add(s[p2]);
            max = Math.max(max, p2 - p1 + 1);
            p2++;
        } else {
            set.delete(s[p1]);
            p1++;
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
