/**
 * https://leetcode.cn/problems/happy-number/
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getNext = (n) => {
    let total = 0
    while (n) {
      let d = n % 10
      total += d ** 2
      n = (n / 10) | 0
    }
    return total
  }

  let slow = getNext(n)
  let fast = getNext(slow)
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }
  return fast === 1
}
