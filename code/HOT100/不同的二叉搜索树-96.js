/**
 * https://leetcode.cn/problems/unique-binary-search-trees/
 *
 * @param {number} n
 * @return {number}
 */
let numTrees = function (n) {
  let C = 1
  for (let i = 0; i < n; ++i) {
    C = (C * 2 * (2 * i + 1)) / (i + 2)
  }
  return C
}
