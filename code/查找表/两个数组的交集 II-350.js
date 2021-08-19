// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length) return intersect(nums2, nums1)

  const map = {}
  const res = []
  for (const i of nums1) {
    if (map[i]) {
      ++map[i]
    } else {
      map[i] = 1
    }
  }
  for (const i of nums2) {
    if (map[i]) {
      --map[i]
      res.push(i)
    }
  }

  return res
}
