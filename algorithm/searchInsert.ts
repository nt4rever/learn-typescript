function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        // console.log(`low ${low} high ${high}`);
        let mid = Math.trunc((low + high) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return low;
}
/*
0-4-2
0-1-0
1-1-1
1-0-1
*/
console.log(searchInsert([1, 3, 4, 5, 6], 2));
