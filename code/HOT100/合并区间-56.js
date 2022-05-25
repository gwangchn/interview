/**
 * https://leetcode.cn/problems/merge-intervals/
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function (intervals) {
  let res = []

  intervals.sort((a, b) => a[0] - b[0])
  let pre = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(pre[1], cur[1])
    } else {
      res.push(pre)
      pre = cur
    }
  }
  res.push(pre)
  return res
}
