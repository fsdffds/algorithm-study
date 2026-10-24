function solution(answers) {
    // 배열 비교해서 정답이면 +1 하기
    // 인당 맞춘 개수 비교
    
    const math1 = [1, 2, 3, 4, 5];
    const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let num1 = 0; // 맞춘 개수
    let num2 = 0; // 맞춘 개수
    let num3 = 0; // 맞춘 개수
    
    let result = [];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == math1[i % math1.length]) num1++;
        if (answers[i] == math2[i % math2.length]) num2++;
        if (answers[i] == math3[i % math3.length]) num3++;
    }
    
    
    // 최고 점수 구하기
    const max = Math.max(num1, num2, num3);
    
    // 점수 같을 때
    if (num1 === max) result.push(1);
    if (num2 === max) result.push(2);
    if (num3 === max) result.push(3);
    return result;
}