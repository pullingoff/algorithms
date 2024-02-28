- P: 캐시 크기 cacheSize, 도시이름 배열 cities
- R: 배열을 순서대로 처리할 때 총 실행시간
- E: 
- P: 3개짜리 큐를 만들어놓고 캐시로 쓰면서 계산?  
LRU의 중요한 점!!! cache hit일 경우, 그대로 삭제와 추가가 아니라, 값이 업데이트되어야한다.  
e.g. cacheSize가 4이고 현재 cache[2,3,1,4] 인 상태에서 1이 hit되었을때 cache[3,1,4,1]가 되면 안되고 cache[2,3,4,1]가 된다.

```js
function solution(cacheSize, cities) {
    let cache = [];
    let result = 0;
    for(let i=0; i<cities.length; i++) {
        let city = cities[i].toLowerCase();
        // 만약 cache 안에 해당 city가 있으면 +1 
        if(cache.includes(city)) {
          result += 1;  
            // console.log(city)
            // console.log(cache)
            
            let hitIdx = cache.indexOf(city);
            cache = [...cache.slice(0, hitIdx), ...cache.slice(hitIdx+1, cache.length), city]
            // console.log(cache)
        } else {
            result += 5;
            // cacheSize가 0인 경우 shift, push를 하지 않는다.
            if(cacheSize > 0) {
                if(cache.length >= cacheSize)
                    cache.shift();
                cache.push(city.toLowerCase());    
            }
        }
        
    }
    return result;
}
```
