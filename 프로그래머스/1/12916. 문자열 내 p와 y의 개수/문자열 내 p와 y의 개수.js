function solution(s){
    const sLength = s.length;
    let pDeletedCnt = sLength - s.replaceAll('p','').length - s.replaceAll('P','').length;
    let yDeletedCnt = sLength - s.replaceAll('y','').length - s.replaceAll('Y','').length;
    if(pDeletedCnt === yDeletedCnt) 
        return true;
    return false;
}