/*
P: bandage: [시전시간, 1초당회복량,추가회복량]
    health: 최대 체력
    attacks: [몬스터의 공격시간, 피해량] 배열
R: 체력0일 경우 -1, 살아남았을 경우 health
E:
P:
- lastAttackTime만큼 돌리면서 각각 변수를 로직에 맞게 수정
*/

function solution(bandage, health, attacks) {
    const [bandTime, recovery, bonusRecovery] = bandage;
    let life = health;
    let lastAttack = 0; // 지난 공격 타이밍
    
    for(let [time, damage] of attacks) {
        if(time - lastAttack > bandTime) {
            // 보너스를 2번 이상 받는 경우
            const bonusCount = Math.floor((time - lastAttack) / bandTime);
            // console.log(life, recovery*bandTime, bonusRecovery * bonusCount)
            life = life + (recovery * bandTime * bonusCount) + (bonusRecovery * bonusCount);
        } else {
            life = life + (recovery * (time-lastAttack-1));
        }
        if(life >= health) 
            life = health;
        
        // 공격당함
        life -= damage;
        if(life <= 0) return -1;
        lastAttack = time;
        console.log(`시간:${time}, 현재체력:${life}`)
    }
    return life;
}
