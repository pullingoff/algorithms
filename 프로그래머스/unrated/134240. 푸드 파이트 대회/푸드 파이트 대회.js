function solution(food) {
    var answer = '';
    
    // 반복해 0 전까지 붙임
    for(let i=1; i<food.length; i++) {
        const cnt = Math.floor(food[i] /2);
        answer = answer.padEnd(answer.length + cnt, i)
    }
    
    // 0 붙이고 reverse한 문자열 붙임
    return answer + '0' + reverseString(answer);
}

// Function to reverse string
function reverseString(str) {
    return str.split('').reverse().join('')
}