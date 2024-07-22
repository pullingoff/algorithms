/**
 * @param {character[][]} grid
 * @return {number} 섬의 개수 = 연결 컴포넌트 개수 = dfs 횟수

 */
var numIslands = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    let result = 0; // 섬 개수

    for(let i=0; i < n; i++) {
        for(let j=0; j < m; j++) {
            if(dfs(i,j)) {
                result += 1;
            }
        }
    }

    function dfs(x, y) {
        if(x >= 0 && x < n && y >= 0 && y < m) {
            if(grid[x][y] == 1) {
                grid[x][y] = 0
                dfs(x, y+1);
                dfs(x, y-1);
                dfs(x+1, y);
                dfs(x-1, y);
                return true;
            }
        }
        return false
    }
    
    return result;    
};
