function solution(participant, completion) {

    // 알파벳 순으로 정렬
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i])
            return participant[i];
    }
}