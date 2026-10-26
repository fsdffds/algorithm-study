function solution(s){
    // 문자열 -> 배열로 바꿈
    // p의 개수, y의 개수 구함
    // 같으면 true 다르면 false
    // 둘 다 없으면 true

    console.log(s.split(""))
    let cntP = 0;
    let cntY = 0;
    let answer = true;
    
    // 개수 구하기
    s.split("")
        .map(c => {
        if (c == 'p' || c === 'P') cntP++;
        if (c == 'y' || c === 'Y') cntY++;
    });
    
    // 개수 비교
    if (cntP - cntY === 0) return answer;
    else return !answer;
}