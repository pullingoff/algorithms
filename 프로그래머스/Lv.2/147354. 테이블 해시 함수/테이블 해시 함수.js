/*
- P: data의 튜플을 col번째 컬럼 기준 정렬, row_begin <= i <= row_end인 모든 S_i를 누적
- R: 하여 bitwise XOR한 값
- E:
- P: 단계별로 나눠보면
1. col 기준 오름차순 정렬. 값 동일할 경우 1번째 컬럼 기준 내림차순 정렬.
2. row_begin~row_end 범위 값 계산
*/

function solution(data, col, row_begin, row_end) {
    let answer = 0;
    
    // 정렬
    data.sort((a, b) => {
        return a[col - 1] - b[col - 1] || b[0] - a[0];
    });
    
    // S_i 값 구하기
    for(let i=row_begin-1; i<row_end; i++) {
        let S_i = 0;
        for(let val of data[i]) {
            S_i += (val % (i+1));
        }
        // bitwise XOR
        answer ^= S_i;
    }
    
    return answer;
}