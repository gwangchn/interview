// https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = null
  let tail = null
  let carry = 0

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const num = n1 + n2 + carry

    if (!head) {
      head = tail = new ListNode(num % 10)
    } else {
      tail.next = new ListNode(num % 10)
      tail = tail.next
    }
    carry = Math.floor(num / 10)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carry > 0) tail.next = new ListNode(1)

  return head
}