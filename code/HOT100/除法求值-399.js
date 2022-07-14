/**
 * https://leetcode.cn/problems/evaluate-division/
 *
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const unionFind = new UnionFind(values.length << 1),
    h = new Map()
  for (let i = 0, id = 0; i < values.length; i++) {
    const x = equations[i][0],
      y = equations[i][1]
    if (!Array.from(h.keys()).includes(x)) h.set(x, id++)
    if (!Array.from(h.keys()).includes(y)) h.set(y, id++)
    unionFind.union(h.get(x), h.get(y), values[i])
  }
  return queries.map(([x, y]) => unionFind.isConnected(h.get(x), h.get(y)))
}

class UnionFind {
  constructor(n) {
    this.parent = new Uint8Array(n)
    this.weight = new Float32Array(n)
    while (n--) {
      this.parent[n] = n
      this.weight[n] = 1.0
    }
  }
  union(x, y, value) {
    const rootX = this.find(x),
      rootY = this.find(y)
    if (rootX !== rootY) {
      this.parent[rootX] = rootY
      this.weight[rootX] = (this.weight[y] * value) / this.weight[x]
    }
  }
  find(x) {
    if (x !== this.parent[x]) {
      const orginX = this.parent[x]
      this.parent[x] = this.find(this.parent[x])
      this.weight[x] *= this.weight[orginX]
    }
    return this.parent[x]
  }
  isConnected(x, y) {
    const rootX = this.find(x),
      rootY = this.find(y)
    return rootX !== void 0 && rootX === rootY ? this.weight[x] / this.weight[y] : -1.0
  }
}
