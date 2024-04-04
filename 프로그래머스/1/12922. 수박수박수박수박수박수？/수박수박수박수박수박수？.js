/*
-P: 문자열 길이 n
-R: 길이대로 리턴
-E:
-P:
*/
function solution(n) {
    let str = '';
    for(let i=0; i<n;i++) {
        str += i%2===0 ? '수': '박'
    }
    return str;
}