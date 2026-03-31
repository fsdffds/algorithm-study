function solution(sizes) {
    var answer = 0;
    
    // 입력: sizes = [[60, 50], [30, 70], [60, 30], [80, 40]] // 2차원 배열
    // 출력: 4000  // 최소 넓이의 직사각형
    
    // 필요한 데이터: 적절히 회전시켜 겹쳤을 때 모든 영역을 포함하는 식
    // [w, h] 중에 큰 수를 w로 옮김 -> w, h 중에서 가장 큰 수끼리 곱함
    // 둘 중에 큰 수를 왼쪽으로 옮김 -> [10, 7] [12, 3] [15, 8] [14, 7] [15, 5] 
    // [[14, 4], [19, 6], [16, 6], [18, 7], [11, 7]] 여기서 가장 큰 수 끼리 곱함
    
    // sizes[0] == [60, 50]
    // 2차원 배열의 순회, 비교
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            // 위치를 바꿈
            let change = sizes[i][1];
            sizes[i][1] = sizes[i][0];
            sizes[i][0] = change;
                // sizes[i][1];
            
//             let changeW

//             changeW = sizes[i][1];
//             sizes[i][0] = changeW
//             sizes[i][1] = sizes[i][0] 
        }
    }
    // 2차원 배열을 순회해서 가장 큰 수 뽑기 -> 비교하기
    let wMax = sizes[0][0];
    let hMax = sizes[0][1];
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > wMax) wMax = sizes[i][0];
        if (sizes[i][1] > hMax) hMax = sizes[i][1];
    }
    answer = wMax * hMax;
    return answer;
}