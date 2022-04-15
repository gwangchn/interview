/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b)

  let res = []
  const handler = (num, arr) => {
    res.push(arr.slice())

    for (let i = num; i < nums.length; i++) {
      if (i > num && nums[i] === nums[i - 1]) continue
      arr.push(nums[i])
      handler(i + 1, arr)
      arr.pop()
    }
  }

  handler(0, [])

  return res
}
