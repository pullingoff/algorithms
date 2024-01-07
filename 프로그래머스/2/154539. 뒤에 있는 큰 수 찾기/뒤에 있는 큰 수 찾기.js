/*
P: 정수 배열 numbers
R: 각 원소의 뒷큰수를 차례로 담은 배열 
E:
P: 
- 뒷큰수가 존재하지 않는 원소는 -1을 담음

*/
function solution(numbers) {
    let answer = new Array(numbers.length).fill(0);
    let stack = [];
    
    for (let i=0; i<numbers.length; i++) {
        while(stack.length && (numbers[stack.at(-1)] < numbers[i])) {
            answer[stack.pop()] = numbers[i];
        }
        
        stack.push(i);
    }
    
    while (stack.length) {
        answer[stack.pop()] = -1;
    }
    return answer;
}