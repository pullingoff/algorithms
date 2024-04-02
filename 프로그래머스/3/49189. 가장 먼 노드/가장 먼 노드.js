/*
-P: 노드의 개수n, 간선 정보 2차원 배열 edge
-R: 1번 노드로부터 가장 멀리 떨어진 노드의 갯수
-E:
-P:
*/

function solution(n, edge) {
    const connects = new Array(n).fill().map(_ => []); // 연결된 노드 정보 
    for (const e of edge) {
        // 양방향 그래프이므로 각자의 connects에 연결된 노드를 넣어주기
        connects[e[0]-1].push(e[1]-1);
        connects[e[1]-1].push(e[0]-1);
    }
    
    // BFS
    const visited = [1];
    const queue = [0];
    while(queue.length) {
        const cur = queue.shift();
        
        // 현재 노드와 연결된 노드들을 탐색
        for(const next of connects[cur]) {
            // 현재 노드가 아직 방문하지 않은 상태일 경우에 탐색
            if(!visited[next]) {
                // 방문처리 + 그 값을 현재 deps+1에 삽입
                visited[next] = visited[cur]+1;
                queue.push(next);
            }
        }
    }
    // visited에는 각 deps가 담겨있다. 각 값은 노드1번으로부터의 거리
    const max = Math.max(...visited);
    return visited.filter(el => el === max).length;
}