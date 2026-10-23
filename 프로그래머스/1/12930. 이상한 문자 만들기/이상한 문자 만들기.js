function solution(str) {
    
    // 공백도 문자로 침
    // toUpperCase(), toLowerCase()
    
    return str.split(" ").map((s) => {
        return s.split("").map((char, i) => {
            if (i % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }).join(""); // 단어로 합치기
    }).join(" ");
}