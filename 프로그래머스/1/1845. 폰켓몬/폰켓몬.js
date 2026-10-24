function solution (nums) {
    
    // 최대 = nums.length / 2
    // 중복 제거한 종류 -> Set
    
    const max = nums.length / 2;
    const type = new Set(nums).size;
    
    console.log(max, type);
    
    return Math.min(max, type);
    
}