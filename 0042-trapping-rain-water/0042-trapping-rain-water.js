/**
 * @param {number[]} height
 * @return {number}
 - 투포인터
 - left_max, right_max를 두고 left, right에서부터 옮겨가면서 
 - left_max가 right_max보다 크면 left-->right 방향으로 물이 고일 수 있다는 뜻이므로 그때 고인 값을 키워준다.
 */
var trap = function(height) {
    let answer = 0;
    let left_idx = 0;
    let right_idx = height.length - 1;
    
    let left_max = height[left_idx];
    let right_max = height[right_idx];
    
    
    while(left_idx < right_idx) {
        // 왼---> 오 물이 고인다.
        if(left_max < right_max) {
            answer += left_max - height[left_idx];
            left_idx++;
            left_max = Math.max(height[left_idx], left_max);
        } else {
            answer += right_max - height[right_idx];
            right_idx--;
            right_max = Math.max(height[right_idx], right_max);
        }
    }
    
    return answer;
};