function solution(array, commands) {
    let answer = [];
    
    // array = [1, 5, 2, 6, 3, 7, 4];
    // commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
    
    // commands에서 하나씩 꺼내기
    
    for (let i = 0; i <= commands.length - 1; i++) {
        const cmd = commands[i];
        
        const start = cmd[0];
        const end = cmd[1];
        const pick = cmd[2];
        
        // 1. 자르기
        const sliced = array.slice(start - 1, end);
        
        // 2. 정렬하기 (오름차순)
        const sorted = sliced.sort((a, b) => a - b);
        
        // 3. 하나만 뽑기
        const picked = sorted[pick - 1];
        
        answer.push(picked);
    }
    
    return answer;
}