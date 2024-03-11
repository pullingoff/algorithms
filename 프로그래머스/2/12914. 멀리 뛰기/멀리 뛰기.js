/*
- P: 멀리뛰기에 사용할 칸의 수 n
- R: 1~2칸만 한번에 뛸 수 있을때, 끝에 도달하는 방법의 수 % 1234567 
- E:
- P: 세보면 피보나치 수열대로 커짐... 피보나치를 구하는 DP
*/

function solution (n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1; dp[1] = 1;
  
  for(let i = 2; i <= n; i++)
    dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
  
  return dp[n];
}