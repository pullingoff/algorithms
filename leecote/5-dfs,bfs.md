## 음료수 얼려먹기

```
구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시된다.
구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것.
```

- P: n,m, 얼음틀 map
- R: 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수
- E: 생략 
- P:
상하좌우 미리 만들어두기
1. 0.0에서 시작
2. dfs (상하좌우순회하면서, 그 값이 0이면 다시 dfs,탐색 끝나면 1로 변경)

```js
function solution(n, m, arr){
    const newMap = arr.map(row => row.split(''));

    let result = 0; // 총 생성된 아이스크림 개수

    for(let i=0; i < n; i++) {
        for(let j=0; j < m; j++) {
            // 깊이우선탐색 하나가 끝나는 경우에 +1
            if(dfs(i,j)) result+=1;
        }
    }

    function dfs(x, y) {
        if(x >= 0 && x < n && y >= 0 && y < m) {
            if(newMap[x][y] == 0) {
                newMap[x][y] = 1;
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
}
```
