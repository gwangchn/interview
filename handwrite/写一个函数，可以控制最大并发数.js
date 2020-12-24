// 微信小程序最一开始对并发数限制为5个，
// 后来升级到10个，如果超过10个会被舍弃。
// 后来微信小程序升级为不限制并发请求，
// 但超过10个会排队机制。
// 也就是当同时调用的请求超过 10 个时，
// 小程序会先发起 10 个并发请求，
// 超过 10 个的部分按调用顺序进行排队，
// 当前一个请求完成时，再发送队列中的下一个请求。

function concurrentPoll() {
    this.tasks = [];
    this.max = 10;
    setTimeout(() => {
        this.run()
    }, 0)
}

concurrentPoll.prototype.addTask = function (task) {
    this.tasks.push(task)
}

concurrentPoll.prototype.run = function () {
    if (this.tasks.length == 0) {
        return
    }
    var min = Math.min(this.tasks.length, max);
    for (var i = 0; i < min; i++) {
        this.max--;
        var task = this.tasks.shift();
        task().then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            this.max++;
            this.run();
        })
    }
}
