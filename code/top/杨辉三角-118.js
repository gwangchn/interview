/**
 * https://leetcode.cn/problems/pascals-triangle/
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]]

  if (numRows === 1) return res
  for (let i = 1; i < numRows; i++) {
    const arr = []
    for (let j = 0; j <= i; j++) {
      arr[j] = (res[i - 1][j] ?? 0) + (res[i - 1][j - 1] ?? 0)
    }
    res.push(arr)
  }

  return res
}
