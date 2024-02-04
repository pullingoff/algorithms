function solution(s) {
    // const words = s.split(' ');
    let result = '';
    let wordIdx = 0;
    
    for(let i=0; i<s.length; i++) {
        const char = s[i];
        if(char === ' ') {
            result+= ' ';
            wordIdx = 0;
            continue;
        }
        if(wordIdx%2===0) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
        wordIdx++;
    }
    return result;
}