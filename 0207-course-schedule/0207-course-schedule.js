/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites ([본과목][선수과목])
 * @return {boolean}
 - 사이클이 발견되면 false.

 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const cycle = new Set();
    const visited = new Set();

    // prerequisites을 그래프로 초기화
    for (let val of prerequisites) {
        // append를 해서 인접 리스트로 만들어준다. 
        const prev = graph.get(val[1]) ?? [];
        graph.set(val[1], [...prev, val[0]]);
    }

    const dfs = (node) => {
        if(cycle.has(node)) return false;
        if(visited.has(node)) return true;
        
        // 방문 표시
        visited.add(node);
        cycle.add(node);

        const neighbors = graph.get(node) ?? [];
        // graph.get(node) => 배열 
        // 이웃 노드 iterate 
        for(let i=0; i<neighbors.length; i++) {
            if(!dfs(neighbors[i])) return false;
        }

        // cycle 에서 빼준다.
        cycle.delete(node);
        return true;
    }

    for (let i=0; i<numCourses; i++) {
        if(!dfs(i)) return false;
    }

    return true;
};