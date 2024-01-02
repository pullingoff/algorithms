/*
P: 보드판 2차원 배열
R: R에서 시작해 G까지 갈 수 있는 최소한의 횟수
E:
P: bfs 사용하기
- D거나 양끝일때 ++1;
*/

function getRPosition(board) {
    let [x,y] = [0,0];
    const boardLength = board.length;
    for (let i=0; i<boardLength; i++) {
        if(board[i].includes('R')) {
            x = board[i].indexOf('R');
            y = i;
        }
    }
    // console.log(x,y)
    return [x,y]
}
function solution(board) {
    let result = 0;
    const newBoard = board.map(str => str.split(''));
    const [startX, startY] = getRPosition(board);
    const xLength = board[0].length;
    const yLength = board.length;
        
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    bfs(startX,startY);
    
    function bfs(x, y) {
        const stack = [];
        stack.push([x,y]);
        
        while(stack.length) {
            console.log(stack);
            let [a,b] = stack.shift();
            
            for(let i=0; i<4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && nx < xLength && ny >= 0 && ny < yLength && newBoard[ny][nx]) {
                    if (newBoard[ny][nx] == 'G') {
                        return result++; // 마지막 횟수 더해서 반환
                    }
                    if (newBoard[ny][nx] == 'D') {
                        if(dx !== 0) { // 좌우이동    
                            stack.push([ny, nx+i]);
                        } else {
                            stack.push([ny+i, nx]);
                        }
                        result++;
                    }
                }
            }
        }
    }
    
}