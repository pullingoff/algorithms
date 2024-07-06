/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counter = new Map();

    for(num of nums) {
        if(counter.get(num)) {
            counter.set(num, counter.get(num)+1)
        } else {
            counter.set(num, 1)
        }
    }

    // counter에서 가장 수 높은 것 K개 뽑아내기
    return sortByValue(counter).slice(0, k).map((elem) => elem[0])
};

const sortByValue = (map) => {
    return [...map.entries()].sort((a, b) => b.value - a.value)
}