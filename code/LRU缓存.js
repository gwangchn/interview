// https://leetcode-cn.com/problems/lru-cache/description/

function DoubleNode(key = null, val = null) {
  this.key = key
  this.val = val
  this.prev = null
  this.next = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = 0
  this.max = capacity
  this.cache = {}
  this.head = new DoubleNode()
  this.tail = new DoubleNode()
  this.head.next = this.tail
  this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache[key]

  if (node) {
    this.removeNode(node)
    this.addtoHead(node)
    return node.val
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.cache[key]

  if (node) {
    node.val = value
    this.removeNode(node)
    this.addtoHead(node)
  } else {
    ++this.size
    if (this.size > this.max) {
      const prev = this.tail.prev

      this.removeNode(prev)
      this.cache[prev.key] = null
      --this.size
    }

    const current = new DoubleNode(key, value)
    this.cache[key] = current
    this.addtoHead(current)
  }
};
LRUCache.prototype.addtoHead = function(node) {
  const next = this.head.next

  this.head.next = node
  node.prev = this.head
  node.next = next
  next.prev = node
}
LRUCache.prototype.removeNode = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
