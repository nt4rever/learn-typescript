function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    if (strs.length == 0) return prefix;
    let minStr = strs.reduce((_a, _b) => {
        return _a.length > _b.length ? _b : _a;
    });

    for (let i = 0; i < minStr.length; i++) {
        let c = strs[0][i];
        if (checkAll(c, i, strs)) {
            prefix += c;
        } else {
            break;
        }
    }
    return prefix;
}

function checkAll(c: string, i: number, strs: string[]) {
    for (let s of strs) {
        if (s[i] !== c) {
            return false;
        }
    }
    return true;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
