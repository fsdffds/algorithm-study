function solution(sizes) {
    // (큰 수, 작은 수)로 변경
    
    let maxW = 0;  // 큰 수 중에 제일 큰 값
    let maxH = 0;  // 작은 수 중에 제일 큰 값
    
    for (const [x, y] of sizes) {
        
        const max = Math.max(x, y);
        const min = Math.min(x, y);
        
        if (max > maxW) maxW = max;
        if (min > maxH) maxH = min;
    }
    
    return maxW * maxH;
}