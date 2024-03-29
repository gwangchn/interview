/**
 * https://leetcode.cn/problems/insert-delete-getrandom-o1/description/?favorite=2ckc81c
 *
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var RandomizedSet = function () {
  this.nums = []
  this.indices = new Map()
}

RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false
  }
  let index = this.nums.length
  this.nums.push(val)
  this.indices.set(val, index)
  return true
}

RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false
  }
  let id = this.indices.get(val)
  this.nums[id] = this.nums[this.nums.length - 1]
  this.indices.set(this.nums[id], id)
  this.nums.pop()
  this.indices.delete(val)
  return true
}

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length)
  return this.nums[randomIndex]
}
