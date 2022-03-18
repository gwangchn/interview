/**
 * https://leetcode-cn.com/problems/path-sum-iii/
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
 * @param {number} targetSum
 * @return {number}
 */
let pathSum = function(root, targetSum) {
  const map = Object.create(null);
  map[0] = 1;
  let res = 0;

  let dfs = function(root, prefixSum) {
    if (!root) return 0;

    let sum = prefixSum + root.val;
    if (map[sum - targetSum] > 0) {
      res += map[sum - targetSum];
    }
    if (map[sum] > 0) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }

    dfs(root.left, sum)
    dfs(root.right, sum)

    map[sum]--;
  }

  dfs(root, 0);
  return res
};
