/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const handler = (x, n) => {
    let res = 1
    while (n > 0) {
      if (n % 2 === 1) {
        res *= x
      }
      x *= x
      n = Math.floor(n / 2)
    }
    return res
  }

  return n >= 0 ? handler(x, n) : 1 / handler(x, -n)
}
