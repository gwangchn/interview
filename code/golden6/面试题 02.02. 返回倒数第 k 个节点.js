/**
 * https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/description/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let pre = head
  let cur = head

  for (let i = 0; i < k; i++) {
    cur = cur.next
  }
  while (cur) {
    pre = pre.next
    cur = cur.next
  }

  return pre.val
}
