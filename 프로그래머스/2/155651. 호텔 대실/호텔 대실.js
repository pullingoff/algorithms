/*
P: 호텔 입실-퇴실 시간 배열 book_time
R: 최소한의 객실을 사용할 때 객실의 수
E:
P:
- 시작 시간 빠른 기준 정렬 
*/
function solution(book_time) {
  let answer = [];
  
  book_time.sort().forEach(time => {
      const start = getFormatTime(time[0]);
      const end = getFormatTime(time[1]);
      
      if (answer.length === 0) {
          answer.push(end + 10);
      } else {
          answer = answer.sort();   // 가장 이른 시간으로 정렬
          let isFull = true;        
          for (let i=0; i<answer.length; i++) {
              // 입실시간보다 빠른 청소되어있는 방이 있으면
              if (answer[i] <= start) {
                  answer[i] = end + 10; // 퇴실시간+10 넣기
                  isFull = false;       
                  break;
              }
          }
          // 체크가 한번도 안됬으면 새로운 방에 퇴실시간+10 넣기
          if (isFull) answer.push(end + 10);
      }
  });
  
  return answer.length;
}
                                   
function getFormatTime(str) {
    const [hour, minute] = str.split(':');
    return parseInt(hour) * 60 + parseInt(minute);
}