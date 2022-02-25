/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
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
let swapPairs = function(head) {
  let dump = new ListNode(null, head)
  let cur = dump
  while (cur.next && cur.next.next) {
    let next = cur.next.next
    let prev = cur.next
    prev.next = next.next
    next.next = prev
    cur.next = next
    cur = next.next
  }

  return dump.next
};
