function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let l = m;
    for (let i = 0; i < n; i++) {
        nums1[l] = nums2[i];
        l++;
    }
    nums1.sort((a, b) => a - b);
}
