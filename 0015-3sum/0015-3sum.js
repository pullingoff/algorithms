/**
 * @param {number[]} nums
 * @return {number[][]}
 * 개선하면 좋을 점
 1. 결과값이 배열을 담아야하므로 Set 써도 참조형이라 중복 제거 불가 -> 그냥 배열 쓰기
 2. 이전 nums[i]과 값이 동일하다면 패스하게
 3. nums 커지니까 TLE 떠서 while 내부 while 로직 추가함
 */
var threeSum = function(nums) {
    const answer = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // nums[i]가 이전 원소와 동일할 경우 스킵
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let lowIdx = i + 1;
        let highIdx = nums.length - 1;

        while (lowIdx < highIdx) {
            const sum = nums[i] + nums[lowIdx] + nums[highIdx];
            if (sum === 0) {
                answer.push([nums[i], nums[lowIdx], nums[highIdx]]);
                while (nums[lowIdx] === nums[lowIdx + 1]) lowIdx++;
                while (nums[highIdx] === nums[highIdx - 1]) highIdx--;
                lowIdx++;
                highIdx--;
            } else if (sum > 0) {
                highIdx--;
            } else {
                lowIdx++;
            }
        }
    }
    
    return answer;
};
