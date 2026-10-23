function solution(numbers) {
    // 1. 서로 다른 인덱스의 두 수 뽑기
    // 2. 더해서 배열에 저장 + 중복 제거(Set)
    // 3. 배열에 오름차순으로 담기 (sort (a, b) => a - b)
    
    let answers = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answers.push(numbers[i] + numbers[j]);
        }
    }
    answers = [...new Set(answers)];
    answers.sort((a, b) => a - b);
    
    return answers;
}