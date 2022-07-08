/**
 * https://leetcode.cn/problems/house-robber-iii/
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
var rob = function (root) {
  const dfs = node => {
    if (!node) return [0, 0]
    let l = dfs(node.left)
    let r = dfs(node.right)
    return [node.val + l[1] + r[1], Math.max(...l) + Math.max(...r)]
  }
  const res = dfs(root)

  return Math.max(...res)
}
