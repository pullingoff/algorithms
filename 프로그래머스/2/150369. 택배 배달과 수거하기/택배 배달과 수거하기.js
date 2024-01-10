/*
- P: 트럭에 실을수있는 상자 갯수 cap, 배달지 갯수 n, 택배 상자개수 deliveries, 수거할 상자개수 pickups
- R: 모든 배달과 수거를 마치고 돌아오는 최소 이동 거리
- E:
- P: 
*/
function solution(cap, n, deliveries, pickups) {
    deliveries = deliveries.reverse();
    pickups = pickups.reverse();
    let answer = 0;
    
    let toDelivery = 0;
    let toPickup = 0;
    
    for (let i=0; i<n; i++) {
        toDelivery += deliveries[i];
        toPickup += pickups[i];
        
        while (toDelivery > 0 || toPickup > 0) {
            toDelivery -= cap;
            toPickup -= cap;
            answer += (n-i) * 2
        }
    }
    return answer;
}