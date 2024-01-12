function solution(storey) {
    let answer = 0;
    
    while(storey) {
        let remainder = storey %10;
        if (remainder > 5) {
            answer += (10-remainder);
            storey += 10;
        } else if (remainder < 5) {
            answer += remainder;
        } else {
            if (Math.floor(storey/10) % 10 > 4) {
                storey += 10;
            }
            answer += remainder;
        }
        storey = Math.floor(storey/10);
    }
    return answer;
}