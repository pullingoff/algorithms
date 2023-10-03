/*
P: 배열 answers
R: 가장 많은 문제를 맞힌 사람
E:
P: 시간복잡도 O(n)이 되도록 루프를 한번만 돌자.
1. 문제 idx % 패턴개수
*/
function solution(answers) {
    // 점수 담는 map 초기화
    const scores = [0,0,0];
    
    const supoja1 = [1,2,3,4,5]; // 5
    const supoja2 = [2,1,2,3,2,4,2,5]; // 8
    const supoja3 = [3,3,1,1,2,2,4,4,5,5]; // 10
    
    answers.forEach((ans, idx) => {
        if (supoja1[idx % 5] === ans) {
            scores[0] = scores[0] + 1;
        } 
        
        if (supoja2[idx % 8] === ans) {
            scores[1] = scores[1] + 1;
        } 
        
        if (supoja3[idx % 10] === ans) {
            scores[2] = scores[2] + 1;
        } 
    })
    
    return getIndexOfMax(scores);
}

// 최고점 뽑기
function getIndexOfMax(arr) {
    const max = arr.reduce((m, n) => Math.max(m, n));
    const maxArr = [...arr.keys()].filter(i => arr[i] === max);
    return maxArr.map((val) => val +1)
}