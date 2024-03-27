/*
- P: 정수 a,b
- R: a~b 사이에 있는 모든 정수의 합
- E: a와 b는 음수일 수도 있음.
- P:
    1. a,b 중 더 큰 값을 알아냄
    2. for 문 돌리면서 더하기
*/
function solution(a, b) {
    if (a===b) return a;
    
    return a-b>0 ? sum(b,a) : sum(a,b)
}

function sum(smaller,bigger) {
    let answer = 0;
     for(let i=smaller; i<=bigger; i++) {
        answer += i;
    }
    return answer;
}