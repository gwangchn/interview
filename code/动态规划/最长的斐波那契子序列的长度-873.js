/**
 * https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/
 *
 * @param {number[]} arr
 * @return {number}
 */
let lenLongestFibSubseq = function (arr) {
  let n = arr.length
  let index = new Map()
  let longest = new Map()
  let ans = 0

  for (let i = 0; i < n; i++) {
    index.set(arr[i], i)
  }
  for (let k = 0; k < n; k++) {
    for (let j = 0; j < k; j++) {
      let num = arr[k] - arr[j]
      if (num < arr[j] && index.has(num)) {
        let i = index.get(num) || 0
        longest.set(j * n + k, (longest.get(i * n + j) || 0) + 1)
        ans = Math.max(ans, longest.get(j * n + k) + 2)
      }
    }
  }

  return ans
}
