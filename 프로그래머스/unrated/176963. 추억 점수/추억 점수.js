/*
P: 사람문자열배열 name, 사람별그리움점수를담은 정수배열 yearning, 사진별 인물이름 2차원배열 photo
R: 사진들의 추억 점수를 photo에 주어진 순서대로 담은 배열
E: 
P: 
1. Map에 사람별 그리움 점수 담기
2. photo iterate하며 점수 계산
*/

// 함수형 풀이

function solution(name, yearning, photo) {

    return photo.map((v)=> 
                     v.reduce((a, c)=> 
                              a += yearning[name.indexOf(c)] ?? 0
                              , 0)
                    )
}

    

// 함수형 없이 반복문을 돌리는 경우
function plainSolution(name, yearning, photo) {
    var answer = [];
    
    const yearningMap = new Map();
    
    for(let i=0; i<name.length; i++) {
        yearningMap.set(name[i], yearning[i]);
    }
    
    for(let i=0; i<photo.length; i++) {
        let sum=0;
        for(let j=0; j<photo[i].length; j++) {
            let score = yearningMap.get(photo[i][j]);
           sum += (score > 0 ? score : 0);
        }
        answer.push(sum);
    }
    
    return answer;
}