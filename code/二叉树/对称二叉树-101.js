// https://leetcode-cn.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return check(root, root)
}

function check(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}

/**
 * 迭代
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  return check(root, root)
}

function check(p, q) {
  const queue = [p, q]

  while (queue.length) {
    let u = queue.shift()
    let v = queue.shift()

    if (!u && !v) continue
    if ((!u || !v) || (u.val !== v.val)) return false

    queue.push(u.left)
    queue.push(v.right)
    queue.push(u.right)
    queue.push(v.left)
  }

  return true
}
