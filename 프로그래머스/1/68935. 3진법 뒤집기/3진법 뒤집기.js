/*
P: 자연수 n
R: n을 3진법으로 구하고 -> 앞뒤 반전 -> 10진법으로 표현
E:
P:
1. 3진법으로 바꾸는 함수: n을 3으로 나머지가 0이 아닐때까지 나눈다.
2. 앞뒤 반전
3. 10진법으로 바꾸는 함수 
*/
function solution(n) {
    var answer = 0;
    const converted = n.toString(3);
    return parseInt([...converted].reverse().join(''),3);
}
