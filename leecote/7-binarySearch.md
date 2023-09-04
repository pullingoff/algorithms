## 부품 찾기

```
P: 보유중인 부품 갯수 N, 보유중인 부품 배열 stockArray, 손님이 찾는 부품 갯수 M, 손님이 찾는 부품 배열 needArray
R: 각 부품 보유 여부 배열 [yes, no, no]
E:
P:
1. stockArray 정렬
2. needArray의 맨 첫 원소를 꺼내서
2-1. stockArray[N/2] 기준으로 needArray[0]이 더 작은지 큰지 확인
2-2. 범위를 좁혀가며 이진탐색
```

```js
function solution(N, stockArray, M, needArray) {
    const result = [];
    stockArray.sort((a,b) => (a-b));
    
    // 필요한 부품 배열에서 찾을때까지 이진탐색
    for(let i=0; i<needArray.length; i++) {
        const target = needArray[i];
        result.push(binarySearch(stockArray, target, 0, N-1) ? 'yes' : 'no')
    }
    return result
}

// target이 arr 안에 있을 경우 해당 인덱스 반환
// arr: 검색 대상 배열
// target: 검색 원소
// start: 검색 시작 인덱스
// end: 검색 끝 인덱스
function binarySearch(arr, target, start, end) {
    while (start <= end) {
        mid = Math.floor((start + end) /2);
        if(arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid -1;
        } else {
            start = mid +1;
        }
    }
    return null;
}
```
