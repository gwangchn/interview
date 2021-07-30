// https://juejin.cn/post/6844903625769091079
// https://juejin.cn/post/6945319439772434469
// https://github.com/xieranmaya/blog/issues/3

class Promise {
  constructor(cb) {
    this.onResolvedArr = []

    let resolve = value => {
      setTimeout(() => {
        this.value = value
        this.onResolvedArr.forEach(fn => fn())
      })
    }

    cb(resolve)
  }

  then(onResolve) {
    return new Promise(resolve => {
      this.onResolvedArr.push(() => {
        const x = onResolve(this.value)
        if (x instanceof Promise) {
          x.then(resolve)
        } else {
          resolve(x)
        }
      })
    })
  }
}
