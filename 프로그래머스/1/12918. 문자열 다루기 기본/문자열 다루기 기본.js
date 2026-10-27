function solution(s) {
    // s.length === 4 && 6
    // 배열로 바꿔서 숫자인지 확인
    
    const arr = s.split("");
    
    if (arr.length !== 4 && arr.length !== 6) {
        return false;
    } 
    return arr.every(a => a >= 0 || a <= 9);
}