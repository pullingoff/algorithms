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