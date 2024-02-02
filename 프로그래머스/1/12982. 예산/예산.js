/*
P: 부서별 신청 금액 배열 d, 예산 budget
R: 지원 가능한 부서의 최댓값
E:
P: 작은 순으로 정렬해서 지원
*/

function solution(d, budget) {
    let cnt = 0;
    d.sort((a,b) => a-b);
    
    for(let cost of d) {
        if(budget-cost >= 0) { // 지원 가능
            budget -= cost;
            cnt++;
        } else {
            return cnt;
        }
    }
    return cnt;
}