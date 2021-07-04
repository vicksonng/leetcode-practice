/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (!head) return false;

    let l1 = head;
    let l2 = head;

    while (l1 && l1.next && l1.next.next) {
        l1 = l1.next.next;
        l2 = l2.next;
        
        if(l1 == l2) {
            return true;
        }
    }
    return false;
};