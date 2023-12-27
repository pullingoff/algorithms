/*
P: 미사일 (s,e) 범위 목록 targets
R: 모든 미사일을 요격하기 위해 필요한 최솟값
E:
P:
1. 미사일을 s 순서대로 정렬
2. 0.5 간격으로 for문을 돌리면서 이전 미사일의 범위 
*/
function solution(targets) {
    let shootCount = 0;
    let recentShoot = -0.5;
    const targetList = targets.sort((a,b) =>a[1] - b[1]);
    
    for(let i=0; i<targetList.length; i++) {
        if(recentShoot < targetList[i][0]) {
            recentShoot = targetList[i][1] - 0.5;
            shootCount++;
        }
    }
    return shootCount;
}

0.5, 2,5