/**
 * @param {string} s
 * @return {boolean} s를 소문자로 모두 변환, non-알파벳 문자 다 지운 후 palindrome인지 여부
 97~122 소문자 알파벳 
 */
var isPalindrome = function(s) {
    const arr = s.trim()
                 .toLowerCase()
                 .split('')
                 .filter(el => (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) ||
                        (el.charCodeAt() >= 97 && el.charCodeAt() <= 122));
    
    if(arr.length === 1) return true;
    for(let i=0; i<arr.length/2; i++) {
        if(arr[i] !== arr[arr.length-1-i]) return false;
    }
    return true;
};