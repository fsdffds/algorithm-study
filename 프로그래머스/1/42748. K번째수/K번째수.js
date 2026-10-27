function solution(array, commands) {
    // 인덱스 i-1, j-1, k-1
    
    let answer = [];
    
    // 1. commands 구조분해할당 -> array 자르고 오름차순 정렬
    for (const [i, j, k] of commands) {
        const newArray = array.slice(i-1, j).sort((a, b) => a - b);
        answer.push(newArray[k-1]);
    }
    
    return answer;
}