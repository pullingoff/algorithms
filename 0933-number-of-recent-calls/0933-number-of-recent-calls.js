
var RecentCounter = function() {
    this.q = [];
};

/** 
 * @param {number} t
 * @return {number}
 t가 들어오고.. 3000ms 사이에 들어온 ping의 갯수 반환하기
 => [t-3000~t] 사이의 것이 아니면 pop 
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t);

    while(this.q[0] < t-3000) {
        this.q.shift();
    }
    return this.q.length;
};