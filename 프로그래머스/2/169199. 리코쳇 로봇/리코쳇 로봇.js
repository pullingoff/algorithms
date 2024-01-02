/*
P: 보드판 2차원 배열
R: R에서 시작해 G까지 갈 수 있는 최소한의 횟수
E:
P: bfs 사용하기
*/

function getPosition(board, char) {
    let [x,y] = [0,0];
    const boardLength = board.length;
    for (let i=0; i<boardLength; i++) {
        if(board[i].includes(char)) {
            x = i;
            y = board[i].indexOf(char);
        }
    }
    return [x,y]
}

function solution(board) {
    const [startX, startY] = getPosition(board, 'R');
    const [targetX, targetY] = getPosition(board, 'G');
    const xLength = board.length;
    const yLength = board[0].length;
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    const visited = new Array(xLength).fill().map(_ => new Array(yLength).fill(false));
    
    // 유정님 코드 참고
    function isMovable(x, y) {
        if(x<0 || x >= xLength || y < 0 || y >= yLength) {
            return false;
        } else if (board[x][y] === 'D') {
            return false;
        }
        return true;
    }
    
    visited[startX][startY] = true;
    const queue = [{x: startX, y: startY, count: 0}];
    
    while(queue.length) {
        let {x,y,count} = queue.shift();
        // 도착했으면 리턴
        if(x===targetX && y===targetY) {
            return count;
        }

        for(let i=0; i<4; i++) {
            let currX = x;
            let currY = y;
            let nextX = currX + dx[i];
            let nextY = currY + dy[i];

            // 움직일수 있는 만큼 움직이기
            while (isMovable(nextX, nextY)) {
                currX = nextX;
                currY = nextY;
                nextX += dx[i];
                nextY += dy[i];
            }

            // 방문 처리
            if(!visited[currX][currY]) {
                visited[currX][currY] = true;
                queue.push({x: currX, y: currY, count: count+1});
            }
        }
        
    }
    return -1
}