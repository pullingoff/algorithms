/**
 * @param {number[]} nums (정렬됨,유니크한정수들)
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let min = 0
    let max = 0
    for(let i=0; i<nums.length; i++) {
        if(i===0) {
            min = nums[0]
            max = nums[0]
        }
        // console.log(`for loop 처음/ min: ${min}, max: ${max}`)
        if(nums[i+1]-nums[i] === 1) {
            max = nums[i+1]
            // console.log(`1차이나서 max 바뀜/ min: ${min}, max: ${max}`)
        } else {
            // 끝내기
            if(min === max) {
                // console.log(`혼자있는한자리/ min: ${min}, max: ${max}`)
                result.push(`${max}`)
            } else {
                // console.log(`짝대기를그어/ min: ${min}, max: ${max}`)
                result.push(`${min}->${max}`)
            }
            // max를 min으로 교체해 다음 거 할 수 있게 하기
            min = nums[i+1]
            max = nums[i+1]
        }
    }
    return result;
};