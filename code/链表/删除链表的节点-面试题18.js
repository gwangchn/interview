/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 let deleteNode = function(head, val) {
    let pre = head
    let cur = pre

    if (cur.val === val) return cur.next

    while(cur) {
        if (cur.val === val) {
            pre.next = cur.next
            return head
        }
        pre = cur
        cur = cur.next
    } 
}
