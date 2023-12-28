/*
P: 현재 등수 문자열 배열 players, 해설진이 부른 이름을 담은 문자열 배열 callings
R: 선수 등수 배열
E:
P:
*/
function solution(players, callings) {
    let result = players;
    let obj = {};
    
    for (let i=0; i< players.length; i++) {
        obj[players[i]] = i;  
    }
    // console.log(obj);
    
    for (let winner of callings) {
        // indexOf: players가 길어지면 느려짐.
        // let winIdx = result.indexOf(winner);
        let winIdx = obj[winner];
        let loser = result[winIdx-1];
        result[winIdx-1] = winner;
        result[winIdx] = loser;
        
        obj[winner] = winIdx-1;
        obj[loser] = winIdx;
    }
    return result;
}