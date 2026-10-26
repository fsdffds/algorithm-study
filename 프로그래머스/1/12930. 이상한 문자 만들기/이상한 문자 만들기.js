function solution(str) {
    // 대문자 -> toUpperCase()
    // 소문자 -> toLowerCase()
    
    // 글자마다 대소문자 판단 -> 배열로 바꾸기
    // 짝수 -> 대문자, 홀수 -> 소문자

    // console.log(str.split(" "))
    return str.split(" ")
    .map(word => {
        return word.split("")
        .map((c, i) => { return i % 2 === 0 ? c.toUpperCase() : c.toLowerCase(); })
        .join("")
        })
        .join(" ")
}