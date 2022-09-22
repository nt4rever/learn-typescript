function removeDuplicates(nums: number[]): number {
    let l = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[l] = nums[i];
            l++;
        }
    }
    return l;
}
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(arr);
const result = arr.filter((_, index) => {
    return index < k;
});
console.log(result);

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
