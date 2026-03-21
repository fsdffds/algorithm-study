function solution(nums) {
    let typeCount = new Set(nums).size;
    return Math.min(typeCount, nums.length / 2);
}