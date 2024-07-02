/**
 * @param {string} s
 * @param {number} 최대 k번 문자를 다른 문자로 바꿀 수 있다.
 * @return {number} 같은 문자를 포함하는 가장 긴 substring의 길이
 - 윈도우 안에서 Map으로 문자별 갯수 카운트 
 어려웠던 부분: window 크기를 유동적으로 하는 거
 1. (window 크기 - 가장 흔한 문자 개수) > k 라면 k만큼 다 바꾸더라도 부족함.
 즉, left++ 하고 window에 left 포인터가 가리키는 문자 count를 하나 줄여

 */
var characterReplacement = function(s, k) {
  const countMap = new Map();
  let left = 0;
  let maxCharCnt = 0;
  let answer = 0;

  for(let right=0; right<s.length; right++) {
    let rightChar = s[right];
    let leftChar = s[left];

    countMap.set(rightChar, countMap.get(rightChar) ? countMap.get(rightChar)+1 : 1);
    maxCharCnt = Math.max(maxCharCnt, countMap.get(rightChar));

    // left 한칸 옮기기
    if(right-left+1 - maxCharCnt > k) {
        countMap.set(leftChar, countMap.get(leftChar) - 1);
        left++;
    }

    answer = Math.max(answer, right-left+1);
  }  

  return answer;
};