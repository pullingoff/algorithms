/*
- P: 갈색 격자의 수 brown, 노란색 격자의 수 yellow
- R: 테두리 1줄만 갈색일 경우, 카펫의 [x, y]
- E: 
- P: 가로x, 세로y라고 했을때 
    - brown/2+2 = x+y   => x = (brown/2+2)-y
    - brown+yellow = xy => (brown+yellow)/(brown/2+2-y) = y
    
*/

function solution(brown, yellow) {
    let y1 = (4+brown+Math.sqrt(brown*brown-8*brown+16-16*yellow))/4;
    let y2 = (4+brown-Math.sqrt(brown*brown-8*brown+16-16*yellow))/4;
    return [y1, y2]
}