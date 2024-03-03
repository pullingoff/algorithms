/*
- P: 몸무게배열 people, 구명보트 무게재한 Limit
- R: 구명보트를 최대한 적게 사용해 구출할 떄 필요한 개수
- E:
- P:
1. 내림차순 정렬
2. 맨 앞과 맨 뒤 합해서 태울수 있으면 태우고 지워
2-1. 없으면 걔만 태워
*/

function solution(people, limit) {
    let cnt = 0;
    let [start, end] = [0, people.length-1];
    let descPeople = people.sort((a,b) => b-a);
    
    while(start <= end) {
        let heaviest = descPeople[start];
        let lightest = descPeople[end];
        
        if(heaviest + lightest > limit) {
            // 무거운 놈만 타기
            start++;
            // console.log(heaviest)
        } else {
            start++;
            end-=1;
            // console.log(heaviest, lightest)
        }
        cnt++;
    }
    return cnt;
}