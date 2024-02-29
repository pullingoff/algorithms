/*
P: clothes 배열
R: 서로 다른 옷의 조합의 수

- 의상의 종류 map
- 반복문을 돌면서 clothes[1]의 값이 의상종류map에 있는지 확인
- 의상종류map안에 있으면 +1, 없으면 map을 새로 추가
(종류1+1) * (종류2+1) * ... * (종류n+1)-1
*/

function solution(clothes) {
    var answer = 1;
    var obj={};
    for(var i=0;i<clothes.length;i++){
        obj[clothes[i][1]]=(obj[clothes[i][1]] || 1) + 1;
    }

    for(var key in obj){
        answer *= obj[key];
    }
    
    return answer-1;
}