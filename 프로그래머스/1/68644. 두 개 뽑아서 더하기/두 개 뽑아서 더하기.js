function solution(numbers) {

    // 인덱스 순서대로 하나씩 뽑기
    
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    
    const set = new Set(result.sort((a, b) => a - b));
    return [...set];
}