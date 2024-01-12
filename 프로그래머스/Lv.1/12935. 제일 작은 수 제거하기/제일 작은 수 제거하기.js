function solution(arr) {
    if(arr.length === 1) return [-1];
    
    let min = Math.min(...arr);
    let minIdx = arr.indexOf(min);
    return [...arr.slice(0, minIdx), ...arr.slice(minIdx+1)];
}