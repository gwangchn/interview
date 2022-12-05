/**
 * https://leetcode.cn/problems/list-of-depth-lcci/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  let stack = [tree]
  const res = []

  while (stack.length) {
    let arr = []
    const dummyHead = new ListNode()
    let cur = dummyHead

    for (let { left, right, val } of stack) {
      cur.next = new ListNode(val)
      cur = cur.next
      left && arr.push(left)
      right && arr.push(right)
    }
    res.push(dummyHead.next)
    stack = arr
  }

  return res
}
