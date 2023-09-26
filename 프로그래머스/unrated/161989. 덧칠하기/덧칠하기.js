/*
P: 구역갯수 n,롤러 길이 m, 다시 페인트 칠할 구역 번호 정수 배열 section
R: 롤러로 페인트칠해야하는 최소 횟수
E: 8,4,[2,3,6] => 2
P:
1. section을 큐처럼 사용한다.
2. section의 head의 값 ~ head+m의 값보다 작은 원소들은 다 dequeue
3. count ++;
4. section이 빌때까지 2,3을 반복 
*/

function solution(n, m, section) {
  let answer = 0;

  // 현재까지 칠한 구역
  let part = 0;

  // section을 forEach() 메서드로 하나씩 확인한다.
  section.forEach((n) => {

    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (n > part) {

      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      part = n + m - 1;

      // 페인트를 칠했으니 1증가 시킨다.
      answer++;
    }
  });

  return answer;
}