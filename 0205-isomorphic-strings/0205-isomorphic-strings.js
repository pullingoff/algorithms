/**
 * @param {string} s
 * @param {string} t
 * @return {boolean} s,t 패턴이 똑같은지
 */
var isIsomorphic = function(s, t) {
    let dict = {} // {e: a, g: d} 매칭되는 것들 사전 {s: t}

    for(let i=0; i < s.length; i++) {
        // dict에 등록 안 되어있으면 등록
        if(Object.values(dict).includes(t[i])) { 
            const key = Object.entries(dict).find(elem => elem[1] === t[i])
            if(key[0] !== s[i]) return false;
        }
        if(!dict[s[i]]) {
            dict = {...dict, [s[i]]: t[i]}
            // continue;
        }
        if(dict[s[i]] !== t[i]) return false;
    }
    return true;
};