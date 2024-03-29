/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/
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
 * @return {number}
 */
let minDepth = function(root) {
  if (!root) return 0

  let depth = 0
  let queue = [root]

  while (queue.length) {
    depth++
    let len = queue.length
    while (len--) {
      let node = queue.shift()

      let left = node.left
      let right = node.right
      if (!left && !right) {
        return depth
      }

      if (left) {
        queue.push(left)
      }
      if (right) {
        queue.push(right)
      }
    }
  }
}
