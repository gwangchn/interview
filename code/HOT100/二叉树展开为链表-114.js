/**
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function (root) {
  let curr = root
  while (curr) {
    if (curr.left) {
      const next = curr.left
      let predecessor = next
      while (predecessor.right) {
        predecessor = predecessor.right
      }
      predecessor.right = curr.right
      curr.left = null
      curr.right = next
    }
    curr = curr.right
  }
}
