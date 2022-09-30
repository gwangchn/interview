/**
 * https://leetcode.cn/problems/valid-anagram/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const map = new Map()
  for (const item of s) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }

  for (const item of t) {
    if (map.has(item)) {
      const val = map.get(item) - 1
      if (val < 0) return false
      map.set(item, val)
    } else {
      return false
    }
  }

  return true
}
