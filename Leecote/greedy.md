## 거스름돈

Q. 당신은 음식점의 계산을 도와주는 점원입니다. 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한이 존재한다고 가정합니다. 
손님에게 거슬러 주어야 할 돈이 N원일 때 거슬러 주어야 할 동전의 최소 개수를 구하세요. 단, 거슬러 줘야 할 돈 N은 항상 10의 배수입니다.

P: 손님에게 줘야할 돈 N원. 항상 10의 배수다
R: 거슬러줘야할 동전의 **최소 개수**
E: 입력 1260일때 출력 6
P:
1. 입력으로 500을 나눈다. 개수를 저장한다.
2. 나머지로 100을 나눈다. 개수를 +한다.
3. 나머지로 50을 나눈다. 개수를 +한다.
4. 나머지로 10을 나눈다. 개수를 +한다.


```js
function getChange(N) {
  const coins = [500,100,50,10];
  let result = 0;
  let leftover = N; // 더 거슬러줘야하는 돈

  for (coin of coins) {
    const count = Math.floor(leftover/coin); // 해당 coin으로 거슬러줄 수 있을때 그 동전의 개수
    result += count;                         // 동전 개수 더하기
    leftover -= count * coin
    if(leftover <= 0) break;
  }
  return result;
}
```
