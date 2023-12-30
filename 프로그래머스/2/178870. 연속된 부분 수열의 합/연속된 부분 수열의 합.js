/*
P: 오름차순으로 정렬된 수열 sequence, 부분수열의 합인 정수 k
R: 해당 조건을 만족하는 수열의 시작 인덱스와 마지막 인덱스를 담은 배열
E:
P: 
*/
function solution(sequence, k) {
    const arr = [];
    let sum = 0;
    let end = 0;
    
    for (let start = 0; start < sequence.length; start++) {
        while(sum < k && end < sequence.length) {
            sum += sequence[end];
            end++;
        }
        if(sum === k) {
            arr.push([start, end-1]);
        }
        sum -= sequence[start];
    }
    // console.log(arr);
    return arr[getShortestIdx(arr)];
}
            
function getShortestIdx(arr) {
    let min = {length: arr[0][1] - arr[0][0], idx: 0};
    
    for (let i=1; i<arr.length; i++) {
        let [start, end] = arr[i];
        if(end - start < min.length) {
            min.length = end - start;
            min.idx = i;
        }
    }
    return min.idx;
}