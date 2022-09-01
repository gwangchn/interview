/**
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const dfs = (nums, left, right) => {
    if (left > right) return null
    let mid = (left + right) >> 1

    return new TreeNode(nums[mid], dfs(nums, left, mid - 1), dfs(nums, mid + 1, right))
  }

  return dfs(nums, 0, nums.length - 1)
}
