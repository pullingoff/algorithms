/**
 * @param {number[]} people: 무게 (정렬안됨) 
 * @param {number} limit: 태울수 있는 무게 리밋
 * @return {number}
 1회 최대 2명까지 태울 수 있음 
 필요한 보트 최소갯수
 - 정렬해서
 - 가장 무거운사람/가장 가벼운 사람 합이 limit을 넘지 않으면 태운다 
 */
var numRescueBoats = function(people, limit) {
    let answer = 0;
    let [first, last] = [0, people.length-1];
    
    people.sort((a, b) => a-b); // asc 정렬
    
    while(last >= first) {
        const firstPerson = people[first]
        const lastPerson = people[last]
        if(firstPerson+lastPerson <= limit) {
            console.log(firstPerson, lastPerson, ' 둘다 태울수 있어')
            first++;
            last--;
        } else {
            // 가장 가벼운 사람들 여럿 태우는거랑 가장 무거운 사람 태우는거 비교
            // 일단은 제일 무거운 사람만 태우기
            console.log(lastPerson, ' 너만 타라...')
            last--;
        }
        answer++;
    }

    return answer;
};