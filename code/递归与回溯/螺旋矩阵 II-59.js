/**
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function(n) {
  let num = 1
  let up = 0
  let down = n - 1
  let left = 0
  let right = down
  const res = new Array(n).fill().map(() => [])

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      res[up][i] = num++
    }
    up++
    for (let i = up; i <= down; i++) {
      res[i][right] = num++
    }
    right--
    for (let i = right; i >= left; i--) {
      res[down][i] = num++
    }
    down--
    for (let i = down; i >= up; i--) {
      res[i][left] = num++
    }
    left++
  }
  return res
};
