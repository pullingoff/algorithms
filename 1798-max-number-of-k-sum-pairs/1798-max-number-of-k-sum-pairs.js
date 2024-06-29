/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number} nums에서 2개를 뽑아 더해서 k가 되는 쌍의 수
 */
var maxOperations = function(nums, k) {
    let answer = 0;    
    let [first, last] = [0, nums.length-1];
    
    nums.sort((a,b) => a-b);
    
    while (first < last) {
        // 합이 k일 경우
        if(nums[first] + nums[last] === k) {
            answer++;
            first++;
            last--;
        } else if(nums[first] + nums[last] > k) {
            last--;
        } else {
            first++;
        }
    }
    
    return answer;
};