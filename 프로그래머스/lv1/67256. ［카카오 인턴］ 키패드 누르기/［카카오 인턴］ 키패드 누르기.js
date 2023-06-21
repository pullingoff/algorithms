/*
P: 누를번호배열 numbers, 어떤손잡이인지hand
R: 각 번호를 누른 게 어떤손인지 연속된 문자열
E:
P:
*/
const map = {
    1: [0,0], 2: [1,0], 3: [2,0],
    4: [0,1], 5: [1,1], 6: [2,1],
    7: [0,2], 8: [1,2], 9: [2,2],
    11: [0,3], 0: [1,3], 12: [2,3]
}


function solution(numbers, hand) {
    var answer = '';
    let curr = {L: 11, R: 12};
    
    for(let i = 0; i < numbers.length; i++) {
        let target = numbers[i];
        if([1,4,7].includes(target)) {
            answer += 'L';
            curr.L = target;
            continue;
        } else if ([3,6,9].includes(target)) {
            answer += 'R';
            curr.R = target;
            continue;
        } 
        // target이 2,5,8,0 인 경우
        let distanceFromL = getDistance(curr.L, target);
        let distanceFromR = getDistance(curr.R, target);
        
        // 왼이 더 멀면
        if(distanceFromL > distanceFromR) {
            answer += 'R';
            curr.R = target;
            continue;
        } else if(distanceFromR > distanceFromL) {
            answer += 'L';
            curr.L = target;
            continue;
        } 
        let selected = hand==='right'? 'R': 'L'
        answer += selected;
        curr[selected] = target;
    }
    
    return answer;
}

function getDistance(start, end) {
    let dx = Math.abs(map[end][0] - map[start][0]);
    let dy = Math.abs(map[end][1] - map[start][1]);
    return dx + dy;
};