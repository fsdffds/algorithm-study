function solution(absolutes, signs) {
    let sum = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) absolutes[i] *= (-1);
        else absolutes[i];
    }
    absolutes.map((a, i) => {
        sum += absolutes[i];
    })
    return sum;
}