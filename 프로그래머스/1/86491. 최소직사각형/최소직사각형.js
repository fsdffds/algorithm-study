function solution(sizes) {
    // 각 w, h에서 큰 수를 w로 보내기
    const normalized = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    const maxW = Math.max(...normalized.map(([w]) => w));
    const maxH = Math.max(...normalized.map(([, h]) => h));
    
    return maxW * maxH;
}