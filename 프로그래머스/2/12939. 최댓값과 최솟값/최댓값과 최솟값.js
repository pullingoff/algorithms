/*
P: 공백으로 구분된 숫자 문자열 s
R: 최소값 최대값 문자열
E:
P: 일단 숫자로 나누기 /
*/

function solution(s) {
    let nums = s.split(' ');
    
    return `${Math.min(...nums)} ${Math.max(...nums)}`;
}