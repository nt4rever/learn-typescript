function primeNumberFilter(a: number, b: number) {
    const arr: number[] = [];
    const pivot = a > 1 ? a : 2;
    for (let i = pivot; i < b; i++) {
        if (i in [2, 3, 5, 7]) {
            arr.push(i);
            continue;
        }
        if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) continue;
        arr.push(i);
    }
    return arr;
}

console.log(primeNumberFilter(200, 1000));
