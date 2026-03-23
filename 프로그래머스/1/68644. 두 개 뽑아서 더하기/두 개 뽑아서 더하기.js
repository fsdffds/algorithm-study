function solution(numbers) {
    let answer = [];
    
    // 중복 제거도 해야 함
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    const set = new Set(answer);
    const arr = Array.from(set);
    
    answer = arr.sort((a, b) => a - b);
    
    return answer;
}