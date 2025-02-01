/**
 * @param {string} s
 * @return {number} 문자열의 마지막 단어의 길이
 split으로 마지막 단어 뽑아내서 length 리턴
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ')
    return words[words.length-1].length;
};