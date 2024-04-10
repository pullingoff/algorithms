/*
-P: arr, 정수 divisor
-R: arr의 원소 중 divisor로 나눠떨어지는 값을 오름차순으로 정렬한 배열
-E:
-P: 나눠지면 배열에 담는다.
*/
function solution(arr, divisor) {
    const answer = [];
    arr.sort((a,b) => a-b).forEach((val, idx) => {
        if(val%divisor===0) {
            answer.push(val)
        }
    })
    return answer.length > 0 ? answer : [-1]
}