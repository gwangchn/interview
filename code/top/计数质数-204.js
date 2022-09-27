/**
 * https://leetcode.cn/problems/count-primes/
 *
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1)
  let res = 0

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ++res
      for (let j = i ** 2; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }

  return res
}
