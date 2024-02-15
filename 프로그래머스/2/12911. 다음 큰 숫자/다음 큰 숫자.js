/*
- P: 자연수 n
- R: n의 다음 큰 숫자
- E:
- P: 
    - 조건1: n보다 큰 자연수 => n이상에서부터 루프 시작
    - 조건2: 2진수로 변환했을 때 1의 갯수가 같을 것
    - 조건3: 조건 1,2를 만족하는 수 중 가장 작은 수
*/
function solution(n) {
    let result = n;
    let oneCnt = getOneCnt(n);

    while(true) {
        result++;
        if(getOneCnt(result) === oneCnt) {
            return result;    
        }
    }
}

function getOneCnt(n) {
    return n.toString(2).replaceAll('0', '').length;
}