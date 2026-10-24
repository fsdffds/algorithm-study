function solution(d, budget) {
    // 최대한 많은 부서 -> 작은 것 부터
    
    // 오름차순으로 정렬
    d.sort((a, b) => a - b);
    
    console.log(d);
    
    let sum = 0;
    let count = 0;
    for (let i = 0; i < d.length; i++) {
        if (d[i] <= budget) {
            budget -= d[i];
            count++;
        } else {
            break;
        }
    }
    return count;
}