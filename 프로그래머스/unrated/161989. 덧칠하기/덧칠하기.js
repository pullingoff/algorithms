/*
P: 구역갯수 n,롤러 길이 m, 다시 페인트 칠할 구역 번호 정수 배열 section
R: 롤러로 페인트칠해야하는 최소 횟수
E: 8,4,[2,3,6] => 2
P:
1. sections을 큐처럼 사용한다. --> 취소! dequeue하는게 더 번거로움
2. sections의 head의 값 ~ head+m의 값까지 색칠
3. count ++;
4. section 마지막 원소까지 2,3을 반복 
*/

function solution(n, m, sections) {
  let answer = 0;
  let paintedEnd = 0; // 현재까지 칠한 구역

  sections.forEach((section, idx) =>  {
      if(paintedEnd < section) {
          answer++;
          paintedEnd = section + m -1; // paintedEnd의 값을 키워버린다.
      }
  });
  
  return answer;
}
