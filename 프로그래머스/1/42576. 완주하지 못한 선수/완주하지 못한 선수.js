function solution(participant, completion) {
    const map = new Map();
    // 이름 명수 구하기
    
    for (const name of participant) {
        map.set(name, (map.get(name) || 0) + 1);
    }
    
    for (const name of completion) {
        map.set(name, (map.get(name)) - 1);
    }
    
    return participant.find(name => map.get(name) > 0);
    
    // for (const name of participant) {
    //     if (map.get(name) > 0) return name;
    // }

}