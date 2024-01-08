/*
P: 자연수 x, y, n
R: x에 정해진 연산들을 해서 y로 만들 수 있는 최소 연산 횟수
E:
P:
*/

function solution(x, y, n) {
    let answer = Infinity;
    if(x===y) return 0;
    bfs(y, 0);
    
    function bfs(num, cnt) {
        let queue = new Queue();
        queue.add([num, cnt]);
        
        while(queue.size()) {
            let [a,b] = queue.popleft();
            if(a === x) {
                answer = Math.min(answer, b);
                break;
            } else if (num < x) {
                break;
            }
            
            if(a-n >= x)
                queue.add([a-n, b+1]);
            if(a%2 === 0)
                queue.add([a/2, b+1]);
            if(a%3 === 0)
                queue.add([a/3, b+1]);
        }
    }
    
    return answer > 0 && answer != Infinity ? answer : -1
}

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  
  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }
  
  add(value) {
    if (this.size() === 0) {
      this.storage['0'] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  
  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}