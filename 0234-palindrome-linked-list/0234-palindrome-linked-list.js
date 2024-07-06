/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];

    // console.log(head.next)

    while(head.next?.val) {
        stack.push(head.next.val);
        head = head.next;
    }

    // console.log(stack)
    // while(head) {
    //     stack.push(head.next)
    //     head = head.next 
    // }

    // 뒤에서부터 순회하면서 회문인지 확인
    for(let i=stack.length-1; i === 0; i--) {
        if(stack.pop() !== head.next?.val) {
            return false;
        }
    }
    return true;
};