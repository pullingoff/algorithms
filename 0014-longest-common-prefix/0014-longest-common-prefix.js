/**
 * @param {string[]} strs
 * @return {string} 배열 원소들의 prefix 
 for 문 하나에서 문자열 전체를 순회하면서 확인하기
 prefix 아니면 바로 멈추고 리턴
 */
var longestCommonPrefix = function(strs) {
    // if(new Set(strs).size === 1) return strs[0];

    const shortestLength = strs[0].length;
    const target = strs[0];
    let idx = 99999999; // 최소 prefix 길이

    for(let i=0; i<strs.length; i++) {
        const word = strs[i];
        let count = 0;
        for(let j=0; j<shortestLength; j++) { // f l o w
            if(word[j] === target[j]) {
                count++;
            } else {
                break;
            }
        }
        idx = Math.min(idx, count)
    }

    return target.slice(0, idx)
};