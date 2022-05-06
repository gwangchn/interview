/**
 * https://leetcode-cn.com/problems/sequential-digits/
 * 
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
let sequentialDigits = function (low, high) {
  let res = []

  for (let i = 1; i <= 9; ++i) {
    let num = i
    for (let j = i + 1; j <= 9; ++j) {
      num = num * 10 + j
      num >= low && num <= high && res.push(num)
    }
  }

  return res.sort((a, b) => a - b)
}
