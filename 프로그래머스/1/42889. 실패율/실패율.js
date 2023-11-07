/*
P: 전체 스테이지의 개수 N, 게임 이용자가 멈춰있는 스테이지 번호가 담긴 배열 stages
R: 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열
E: 
P:
- 실패율: 스테이지에 도달했으나 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수 
- stages 배열 안의 N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자
- 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 
*/
function solution(N, stages) {
    
    let failArr = []; // 실패율을 담는 배열
    
    stages.sort((a,b) => a-b);

    for (let i = 1; i <= N; i++) {
        let oldArrayLength = stages.length;
        stages = removeNumFromArray(i, stages);
        let difference = oldArrayLength - stages.length;
        failArr.push([i, difference / oldArrayLength])
    }
    // failArr 순서대로 정렬
    failArr.sort((a,b) => b[1] - a[1]);
    //console.log(failArr)
    
    return failArr.map((val) => val[0]);
}

function removeNumFromArray(num, array) {
    let lastIdxOfNum = array.lastIndexOf(num);
    if(lastIdxOfNum <0) return array;
    let result = array.slice(lastIdxOfNum+1);
    
    return result;
}