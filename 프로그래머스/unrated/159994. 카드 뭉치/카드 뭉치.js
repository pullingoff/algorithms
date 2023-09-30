/*
P: 문자열 배열 cards1, card2, 원하는 단어 배열 goal
R: cards1, cards2로 goal을 만들 수 있는지 여부 ('Yes' || 'No')
E:
P:
    1. goal의 첫 단어가 cards1[0]인지 확인, 아니라면 cards2[0]인지 확인
    2. cards1[0]이든 2 중 하나가 일치하면 거기서 시작,
    3. 문자열이 일치하지않을경우 다른 카드뭉치로 넘어감
    4. 넘어갔는데도 일치하지 않으면 거기서 No 리턴
*/
function solution(cards1, cards2, goal) {
    let answer;
    let cards1Idx = 0;
    let cards2Idx = 0;
    
    for(let i=0; i<goal.length; i++) {
        let val = goal[i];
        if(val === cards1[cards1Idx]) {
            cards1Idx++;
        } else if (val === cards2[cards2Idx]) {
            cards2Idx++;
        } else {
            return 'No';
        }
    };
    return 'Yes';
}