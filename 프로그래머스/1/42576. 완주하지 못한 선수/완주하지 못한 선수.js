function solution(participant, completion) {
    let obj = {};
    
    for (const x of participant) {
        obj[x] = (obj[x] || 0) + 1
    }
    
    for (const y of completion) {
        obj[y] = (obj[y] || 0) - 1
    }
    
    for (let key in obj) {
        if (obj[key] === 1) return key
    }
}