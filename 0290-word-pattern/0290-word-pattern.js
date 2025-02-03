/**
 * @param {string} pattern 패턴
 * @param {string} s 단어 뭉치 문자열
 * @return {boolean} 일치하는지

 */
var wordPattern = function(pattern, s) {
    let map = {};
    const splited = s.split(' ')

    if(pattern.length !== splited.length) return false;

    for(let i=0; i<pattern.length; i++) {
        const char = pattern[i];
        const word = splited[i];
        if(!map[char]) {
            // map 에 key, value 둘다 없으면 추가
            if(Object.values(map).includes(word)) return false;
            map = {...map, [char]: word};
        }   
        // map에 있으면 비교 
        if(map[char] !== word) return false;
    }   
    return true;
};