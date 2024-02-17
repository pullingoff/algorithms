/*
- P: 문자열 배열 strings, 정수 n 
- R: 각 문자열을 n번째 알파벳 기준으로 오름차순 정렬
- E:
- P:
*/

function solution(strings, n) {
    return strings.sort()                 
                  .sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}