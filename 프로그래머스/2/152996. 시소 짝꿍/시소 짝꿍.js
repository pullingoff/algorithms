/*
- P: 사람들의 몸무게 목록 weights
- R: 2m, 3m, 4m 지점에 앉을 수 있을 경우 무게가 같아지는 쌍의 수
- E:
- P: 
- 중복 제거해서 빠진 수 더하기
- weights 배열의 길이는 10만 이하지만 무게는 100이상 1000이하이므로 Map을 활용해 값 모아두기
- a === b, 2a === 3b, 3a === 2b, 2a === 4b, 3a === 4b, 4a === 2b
  1, 2/3, 3/2, 1/2, 4/3, 2 인데 분모분자 바꿔도 상관없으므로 1, 2/3, 1/2, 4/3만 생각하면 됨
*/

function solution(weights) {
    let result = 0;
    const weightsObj = {}; // 무게별 갯수를 담음
    const wLength = weights.length;
    const ratios = [1, 2/3, 1/2, 3/4];
    
    weights.sort((a, b) => (a - b));
    
    for (let i=0; i<wLength; i++) {
        let w = weights[i];
        
        for (let ratio of ratios) {
            let target = weightsObj[w * ratio];
            if(target) {
                result += target;
            } 
        }
        weightsObj[w] = (weightsObj[w] ?? 0) + 1;
    }
    return result;
}