function solution(phone_number) {
    let pLength = phone_number.length;
    let rear = phone_number.slice(pLength-4)
    
    return '*'.repeat(pLength-4) + rear;
}