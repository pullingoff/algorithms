
function solution(num) {
    let result = []
    let index = 1;
    
    while (index <= num) {
      if (num % index === 0) result.push(index)
      index++
    }
    return result.reduce((acc, cur) => acc + cur, 0);
}