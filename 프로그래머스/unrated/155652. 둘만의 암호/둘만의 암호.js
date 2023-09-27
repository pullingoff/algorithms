/*
    newLetterIdx가 alphabets의 길이보다 큰 경우 그 길이를 빼주는 연산을 했을때,
    케이스 3,17,18,19에서만 실패하는 경우가 있었다.
    위 케이스는 제한 사항을 잘 보면 해결할 수 있다. (테스트 케이스 참고:https://school.programmers.co.kr/questions/43553?referer=collection-of-questions)
    26자인 알파벳의 경우 10자를 빼버리면 16자리가 남는다.
    그런데 제한 사항의 최대값대로 skip의 길이가 10이고 index도 최대 크기인 20를 하면
    letter의 원래 인덱스(15) + index(20) - 알파벳문자열길이(16) 을 하면 19로 
    알파벳문자열길이보다 커서 적절한 newLetter를 찾을 수 없다. 그렇기에 빼기가 아니라
    나머지 연산을 해줘야한다.
    즉, -=를 %=(나머지 연산)으로 고쳐서 해결했다.
    
*/

let alphabets = 'abcdefghijklmnopqrstuvwxyz';

function solution(s, skip, index) {
    let answer = '';
   
    // skip에 있는 알파벳 모두 제거
    for(let letter of skip) {
        alphabets = alphabets.replaceAll(letter, '');
    }
    
    // index 더한 값 찾기
    for(let letter of s) {
        let newLetterIdx = alphabets.indexOf(letter) + index;
        if(newLetterIdx >= alphabets.length) {
            newLetterIdx %= alphabets.length;
        }
        let newLetter = alphabets.charAt(newLetterIdx);
        
        answer += newLetter;
    }
    
    return answer;
}
