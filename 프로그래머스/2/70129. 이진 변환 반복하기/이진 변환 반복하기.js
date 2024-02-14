/*
P: 0과 1로 이루어진 문자열 x
R: [이진변환을 반복한 횟수, 제거된 0의 갯수]
E:
P:
*/

function solution(s) {
    var answer = [];
    let removedZeroCnt = 0;
    let convertCnt = 0;
    
    while(s!=='1') {
        convertCnt++;
        let obj = binaryConvert(s, removedZeroCnt);
        s = obj.s;
        removedZeroCnt = obj.removedZeroCnt;
    }
    
    return [convertCnt, removedZeroCnt];
}

function binaryConvert(s, zeroCnt) {
    let sLength = s.replaceAll('0', '').length;
    return {s: sLength.toString(2), removedZeroCnt: zeroCnt+s.length-sLength}
}