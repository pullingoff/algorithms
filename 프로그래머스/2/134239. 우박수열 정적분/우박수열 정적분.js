function solution(k, ranges) {
  let answer = [];
  const nums = [k];
  
  while (k > 1) {
      k = k%2 ? k*3+1 : k/2;
    nums.push(k);
  }

  // 정적분
  const area = [0];
  for (let i = 1; i < nums.length; i++) {
    let temp = Math.abs(nums[i - 1] - nums[i]) / 2 + Math.min(nums[i - 1], nums[i]);
    area.push(area[area.length - 1] + temp);
  }

  const n = area.length;
  for (let [r1, r2] of ranges) {
    if (n + r2 < 0) {
        answer.push(-1);
    } else {
      const num = area[n+r2-1] - area[r1];
      answer.push(num >= 0 ? num : -1);
    }
  }

  return answer;
}