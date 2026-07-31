/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // First move fast pointer n times
    // Then move both pointers until fast pointer reaches the end
    let slow = head;
    let fast = head;
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(fast === null) return head.next;
    while(fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    // Edge case
    
    slow.next = slow.next.next;
    return head;
    }
}
