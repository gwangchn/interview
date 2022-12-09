/**
 * https://leetcode.cn/problems/successor-lcci/description/
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let successor = null
  if (p.right) {
    successor = p.right
    while (successor.left) successor = successor.left
    return successor
  }
  let node = root
  while (node) {
    if (node.val > p.val) {
      successor = node
      node = node.left
    } else {
      node = node.right
    }
  }
  return successor
}
