/**
 * https://leetcode.cn/problems/partition-list-lcci/description/?favorite=xb9lfcwi
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode(0)
  const smallHead = small
  let large = new ListNode(0)
  const largeHead = large

  while (head) {
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      large.next = head
      large = large.next
    }
    head = head.next
  }
  large.next = null
  small.next = largeHead.next

  return smallHead.next
}
