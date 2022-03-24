/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
  let pre = null
  let current = head

  while (current) {
    const next = current.next
    current.next = pre
    pre = current
    current = next
  }

  return pre
};
