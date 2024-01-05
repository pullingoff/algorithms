/*
P: 정수x, 자연수n
R: x부터 시작해 x씩 증가하는 숫자 n개를 담은 리스트
E:
P:
*/
function solution(x, n) {
    const answer = [];
    for(let i=1; i<=n; i++) {
        answer.push(i*x);
    }
    return answer;
}