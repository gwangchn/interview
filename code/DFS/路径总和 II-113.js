/**
 * https://leetcode-cn.com/problems/path-sum-ii/
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
 * @return {number[][]}
 */
let pathSum = function(root, sum) {
  let res = [];
  let search = function(node, paths) {
    if (isInvalid(node)) return;
    paths.push(node.val);
    if (node.left) {
      search(node.left, paths);
    }
    if (node.right) {
      search(node.right, paths);
    }
    if (!node.left && !node.right) {
      if (sumVals(paths) === sum) {
        res.push(paths.slice());
      }
    }
    paths.pop();
  };
  search(root, []);
  return res;
};

function sumVals(nodes) {
  return nodes.reduce((prev, val) => {
    prev += val;
    return prev;
  }, 0);
}

function isInvalid(node) {
  return !node || node.val === undefined || node.val === null;
}
