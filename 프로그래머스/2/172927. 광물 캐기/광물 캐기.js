/*
P: 갖고 있는 곡괭이의 개수 배열 picks([다이아, 철,돌]), 광물들의 순서를 담은 문자열 배열 minerals
R: 최소한의 피로도 
E:
P: 
- 다이아-철-돌 순으로 쓰는게 좋음 / 그리디로 풀면 좋을 것 같다.
- minerals는 다이아-철-돌 (알파벳) 순으로 정렬
*/
function solution(picks, minerals) {
  var answer = Infinity;

  const mineralsAndPickOfTired = {
    diamond: [1, 5, 25],
    iron: [1, 1, 5],
    stone: [1, 1, 1],
  };

  const len = minerals.length;
  const availableTools = [...picks];

  const dfs = (idx, tired) => {
    const availableToolCnt = availableTools.reduce((a, b) => a + b, 0);
    if (len <= idx || 0 >= availableToolCnt) {
      answer = Math.min(answer, tired);
      return;
    }

    const min = Math.min(len, idx+5);

    for (let k = 0; k < 3; k++) {
      if (availableTools[k] <= 0) continue;

      let needTired = 0;
      for (let i = idx; i < min; i++) {
        needTired += mineralsAndPickOfTired[minerals[i]][k];
      }

      availableTools[k] -= 1;
      dfs(min, tired + needTired);
      availableTools[k] += 1;
    }
  };

  dfs(0, 0);
  return answer;
}