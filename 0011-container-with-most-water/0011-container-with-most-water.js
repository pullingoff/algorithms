/**
 * @param {number[]} height
 * @return {number} 컨테이너가 저장할 수 있는 최대한의 물 
- 사각형의 넓이가 가장 긴 경우를 찾아야함 (=left, right의 곱이 가장 커지는 경우)
- left, right 둘다 바뀔 경우를 계산해서 
- (left, right 중 더 작은 것의 높이)*(right-left)가 기존 max보다 크면 갱신.
 */
var maxArea = function(height) {
    const getArea = (l, r) => Math.min(height[l], height[r]) * (r - l);

    let [left, right] = [0, height.length-1];
    let max = 0;

    while(left < right) {
        max = Math.max(max, getArea(left, right))
        
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};