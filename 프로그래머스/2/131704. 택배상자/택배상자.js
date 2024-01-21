/*
- P: 상자 순서 정수 배열 order
- R: 몇개의 상자를 실을 수 있는지
- E: [4, 3, 1, 2, 5] ->	2
- P: order
    - 메인 컨테이너 벨트에서 보조 컨테이너 벨트로 물건 이동 가능
    - 보조 컨테이너 벨트는 스택 
*/
function solution(order) {
    const stack = [];
    let answer = 0;
    let isDone = false;
    let num = 1;
    
    stack.push(num);
    
    for(let i of order) {
        while (true) {
            if (i < stack.at(-1)) {
                isDone = true;
                break;
            }
            if (i === stack.at(-1)) {
                answer++;
                stack.pop();
                break;
            }
            num++;
            stack.push(num);
        } 
        if(isDone) {
            break;
        }
    }
    return answer;
}