function solution(absolutes, signs) {
    // signs 순회해서 false인 것만 absolutes에 곱하기
    return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}