/*
P: 가로 길이 m, 세로 길이 n
    머쓱이가 쳐야 하는 공이 놓인 위치 좌표를 나타내는 두 정수 startX, startY
    공 위치 좌표 정수 쌍 balls
R: 공을 적어도 벽에 한 번은 맞춘 후 목표 공에 맞힌다고 할 때, 각 회마다 공이 굴러간 거리의 최솟값의 제곱
E:
P:
- if startX < endX면 left
- if startX > endX면 right
- if startY < endY 면 down
- if startY > endY 면 up
*/
function solution(m, n, startX, startY, balls) {
    let answer = [];
    let min = Infinity;
    
    for(let [endX, endY] of balls) {
        const touchPoints = [];
        
        if(startX < endX || startY !== endY) { // left
            touchPoints.push([-startX, startY]);   
        } 
        if(startX > endX || startY !== endY) { // right
            touchPoints.push([2*m-startX, startY]);
        }
        if(startY > endY || startX !== endX) { // up
            touchPoints.push([startX, 2*n-startY]);
        }
        if(startY < endY || startX !== endX) { // down
            touchPoints.push([startX, -startY]);
        }
        
        answer.push(touchPoints.reduce((min, [x,y]) => {
            let length = (x-endX)**2 + (y-endY)**2;
            return Math.min(min, length);
        }, m**2 + n**2));
        
    };
    return answer;
}