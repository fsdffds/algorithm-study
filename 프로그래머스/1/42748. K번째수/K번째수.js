function solution(array, commands) {
    // 1. commands에서 하나씩
    // 2. array[i-1] j-1 까지 자르기
    // 3. 자른 배열에서 array[k-1] 구하기
    // 4. result 배열에 더하기
    
    let i, j, k;
    let answer = [];
    
    for (let x = 0; x < commands.length; x++) {
        i = commands[x][0];
        j = commands[x][1];
        k = commands[x][2];
        
        const newArray = array.slice(i-1, j).sort((a, b) => a - b);
        const a = newArray[k-1];
        answer.push(a);
    }
    return answer;
    
}