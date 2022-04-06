/**
 * https://leetcode-cn.com/problems/combinations/
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function(n, k) {
  let res = []
  let handler = (num, arr) => {
    if (arr.length === k) {
      res.push(arr.slice())
      return
    }
    for (let i = num; i <= n + arr.length - k + 1; i++) {
      arr.push(i)
      handler(i + 1, arr)
      arr.pop()
    }
  }

  handler(1, [])
  return res
}
