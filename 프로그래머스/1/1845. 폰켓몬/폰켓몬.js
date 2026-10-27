function solution (nums) {
    // 중복 제거
    const arr = [...new Set(nums)];

    // 개수 >= nums.length / 2
    return arr.length >= (nums.length / 2) ? (nums.length / 2) : arr.length;
}