/**
 * @param {number[]} nums
 * @return {number} 배열의 절반 이상 나온 원소
 map 만들어서 개수 세면서
 length/2 이상 나온 원소 있으면 반환
 없으면 다시 map에 추가
 */
var majorityElement = function(nums) {
    const map = new Map();
    const target = Math.floor(nums.length/2);

    for(let i=0; i<nums.length; i++) {
        const num = nums[i];
        const cnt = map.get(num) || 0;
        if(cnt >= target) {
            // 개수 확인
            return num;
        }
        map.set(num,cnt+1);
    }
    
};