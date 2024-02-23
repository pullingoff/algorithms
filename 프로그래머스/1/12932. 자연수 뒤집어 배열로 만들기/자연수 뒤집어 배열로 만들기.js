function solution(n) {
    return n.toString()
            .split('')
            .reverse()
            .map(val => parseInt(val))
}