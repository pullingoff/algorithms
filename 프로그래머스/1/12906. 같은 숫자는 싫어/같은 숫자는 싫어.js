/*
P: 0-9가 담긴 arr
R: 연속 숫자를 모두 제거한 arr
E:
P: 스택을 따로 두고 숫자를 담는다. 
스택의 맨 위 원소와 arr[i]가 같으면 넣지 않음. 
*/
function solution(arr) {
    const stack = [];
    
    for(let i=0; i<arr.length; i++) {
        // 1번째 원소 초기화
        if (i===0) {
            stack.push(arr[i]);
            continue;
        }
        if (arr[i] !== stack[stack.length-1]) {
            stack.push(arr[i])
        }
    }
    
    return stack;
}


// 예전에 풀었던 거
// function solution(arr) {
//   var stack = [];
//   for (let i=0; i<arr.length; i++) {
//       if (i==0) {
//         stack.push(arr[i]);
//         continue;
//       }
//       if (arr[i]!==arr[i-1])  stack.push(arr[i])
//   }
//     return stack;
// }