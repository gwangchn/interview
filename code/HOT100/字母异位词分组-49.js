/**
 * https://leetcode.cn/problems/group-anagrams/
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  let map = new Map()
  strs.forEach(str => {
    let s = str.split('').sort().join('')
    if (map.has(s)) {
      map.get(s).push(str)
    } else {
      map.set(s, [str])
    }
  })

  return Array.from(map.values())
}
