function solution(s) {
    if(s.length %2===0) {
        const idx = Math.floor(s.length/2);
        return s[idx-1]+s[idx]
    } else {
        return s[Math.floor(s.length/2)]
    }
}