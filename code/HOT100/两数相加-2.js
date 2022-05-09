/**
 * https://leetcode.cn/problems/add-two-numbers/
 * 
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
let addTwoNumbers = function (l1, l2) {
  let res = new ListNode(null)
  let num = 0
  let cur = res

  while (l1 || l2) {
    cur.next = new ListNode(null)
    cur = cur.next

    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + num
    cur.val = sum % 10
    num = sum >= 10 ? 1 : 0

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (num === 1) cur.next = new ListNode(1)

  return res.next
}
