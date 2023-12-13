/*
P: 가지고 있는 돈 money, 원래 이용료 price, 놀이기구 이용차수 count
R: 현재 가지고 있는 금액에서 얼마가 모자라는지
E:
P: 
1번째: N*1
2번째: N*2
n번쨰: N*n
*/
function solution(price, money, count) {
    let answer = 0;
    let priceTotal = 0;
    
    for(let i=1; i<=count; i++) {
        priceTotal += price * i
    }
    
    answer = money - priceTotal;
    
    return answer > 0 ? 0 : Math.abs(answer);
}