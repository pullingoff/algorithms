/*
P: 재료 정수 배열 ingredient
R: 상수가 포장하는 햄버거의 개수
E:
P: 1,2,3,1을 한 세트로

문자열 버전
1. ingredient join
2. 1231 을 찾아 제거
3. (원래 문자열길이 - 최종문자열길이) / 4를 한다.
*/
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);

    if (stack.slice(-4).join('') == '1231') {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}