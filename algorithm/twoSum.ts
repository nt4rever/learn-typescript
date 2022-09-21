function twoSum(nums: number[], target: number): number[] {
    const indices = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const x: number = target - nums[i];
        if (indices.has(x)) {
            return [indices.get(x)!, i];
        }

        indices.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// in [2,7,11,15]
// map [(2,0), (7,1), (11,2), (15,3)]
// out [0,1]
// https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type-number
