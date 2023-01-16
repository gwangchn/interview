/**
 * https://leetcode.cn/problems/paths-with-sum-lcci/description/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  const prefix = new Map()
  prefix.set(0, 1)
  return dfs(root, prefix, 0, sum)
}

const dfs = (root, prefix, cur, sum) => {
  if (!root) return 0

  cur += root.val

  let ret = prefix.get(cur - sum) || 0

  prefix.set(cur, (prefix.get(cur) || 0) + 1)
  ret += dfs(root.left, prefix, cur, sum)
  ret += dfs(root.right, prefix, cur, sum)
  prefix.set(cur, prefix.get(cur) - 1)

  return ret
}
