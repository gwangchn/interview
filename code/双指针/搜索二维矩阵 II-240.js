/**
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let x = 0,
    y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      --y;
    } else {
      ++x;
    }
  }
  return false;
};
