function romanToInteger(s: string): number {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanMap.get(s[i])! < romanMap.get(s[i + 1])!) {
            value -= romanMap.get(s[i])!;
        } else {
            value += romanMap.get(s[i])!;
        }
    }
    return value;
}

console.log(romanToInteger('MCMXCIV'));
