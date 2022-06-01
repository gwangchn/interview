/**
 * https://leetcode.cn/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
let isValidBST = function (root) {
  let min = -Infinity
  let res = true
  let dfs = node => {
    if (node === null) return

    dfs(node.left)
    if (node.val <= min) {
      res = false
    } else {
      min = node.val
    }
    dfs(node.right)
  }

  dfs(root)

  return res
}
