/*
n=1이면 1/1/0/1/1
n=2이면 4/4/0/4/4
n=3이면 16/16/0/16/16으로
숫자를 5부분으로 구분해 분할해 푸는 것이 좋다
*/

function f(n, k) {
    if (n === 1) {
        return k <= 2 ? k : k - 1;
    }

    const div = Math.pow(5, n - 1); // 나눌 수 (현재 n보다 하나 작은거로 나눠서, 항상 5개의 구역으로 나눌 수 있도록 함
    const mul = Math.pow(4, n - 1); // 1의 개수
    let loc = Math.floor(k / div); // 5개로 나눴을 때 위치 0 1 2 3 4

    if (k % div === 0) { // 딱 5로 나누어떨어졌을 때
        loc -= 1;
    }

    if (loc < 2) { // 11<- 011
        return mul * loc + f(n - 1, k - loc * div);
    } else if (loc === 2) { // 0 part
        return mul * loc;
    } else { // 110 11<-
        return mul * (loc - 1) + f(n - 1, k - loc * div);
    }
}

function solution(n, l, r) {
    return f(n, r) - f(n, l - 1);
}
