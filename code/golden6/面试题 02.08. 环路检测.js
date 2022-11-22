/**
 * https://leetcode.cn/problems/linked-list-cycle-lcci/description/?favorite=xb9lfcwi
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null

  let fast = head
  let slow = head

  while (fast) {
    slow = slow.next
    fast = fast.next
    if (fast) fast = fast.next
    else return null

    if (slow === fast) {
      let pre = head
      while (pre !== slow) {
        pre = pre.next
        slow = slow.next
      }
      return pre
    }
  }

  return null
}
