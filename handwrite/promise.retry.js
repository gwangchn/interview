// promise.retry 的作用是执行一个函数，如果不成功最多可以尝试 times 次
// 传参需要三个变量，所要执行的函数，尝试的次数以及延迟的时间。
Promise.retry = function (fn, times, delay) {
    return new Promise(function (resolve, reject) {
        var error;
        var attempt = function () {
            if (times == 0) {
                reject(error);
            } else {
                fn().then(resolve)
                    .catch(function (e) {
                        times--;
                        error = e;
                        setTimeout(function () { attempt() }, delay);
                    });
            }
        };
        attempt();
    });
};
