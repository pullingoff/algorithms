/**
 * @param {number[]} bills 순서대로 주문
 * @return {boolean} 모든 고객에게 거스름돈을 잘 줄수 있는지 여부
 1. 맨처음에 10이나 20 받으면 return false
 2. 5, 10 둘다 없는데 20 받으면 return false
 */
var lemonadeChange = function(bills) {
    let fiveCnt = 0;
    let tenCnt = 0;
    let fifteenCnt = 0;

    if (bills[0] === 10 || bills[0] === 15) return false;

    for (let bill of bills) {
        if (bill === 5) {
            fiveCnt++;
        } else if (bill === 10) {
            if (fiveCnt > 0) {
                fiveCnt--;
                tenCnt++;
            } else {
                return false;
            }
        } else if (bill === 20) {
             if(fiveCnt >= 1 && tenCnt >= 1){
                fiveCnt--;
                tenCnt--;
                fifteenCnt++;
            } else if(fiveCnt >= 3){
                fiveCnt -= 3;
                fifteenCnt++;
            } else{
                return false;
            }
        }
    }

    return true;
};