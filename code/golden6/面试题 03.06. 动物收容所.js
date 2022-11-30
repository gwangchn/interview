// https://leetcode.cn/problems/animal-shelter-lcci/description/

var AnimalShelf = function () {
  this.queueCat = []
  this.queueDog = []
}

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
  if (animal[1] === 0) {
    // 0代表新入的是猫
    this.queueCat.push(animal[0])
  } else {
    this.queueDog.push(animal[0])
  }
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
  if (!this.queueDog.length && !this.queueCat.length) return [-1, -1]
  if (!this.queueCat.length) return [this.queueDog.shift(), 1]
  if (!this.queueDog.length) return [this.queueCat.shift(), 0]
  // 两队列都有值时，谁的值小谁出队列
  return this.queueCat[0] < this.queueDog[0]
    ? [this.queueCat.shift(), 0]
    : [this.queueDog.shift(), 1]
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
  if (!this.queueDog.length) return [-1, -1]
  return [this.queueDog.shift(), 1]
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
  if (!this.queueCat.length) return [-1, -1]
  return [this.queueCat.shift(), 0]
}

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */
