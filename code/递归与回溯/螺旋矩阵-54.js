/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let up = 0,
    down = m - 1,
    left = 0,
    right = n - 1;
  const res = [];
  while (res.length < m * n) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[up][i]);
    }
    up++;
    for (let i = up; i <= down; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    // 检查下是否越界
    if (res.length === m * n) {
      break;
    }
    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i]);
    }
    down--;
    for (let i = down; i >= up; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
