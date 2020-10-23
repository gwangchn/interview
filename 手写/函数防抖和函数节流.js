// 函数防抖
function debounce(fn, time) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}

// 函数节流
function throttle(fn, time) {
    let canRun = true;
    return function () {
        if (!canRun) {
            return
        }
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canRun = true;
        }, time)
    }
}

function throttle(fn, gapTime) {
    let _lastTime = null;
    return function () {
        let _nowTime = + new Date()
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn();
            _lastTime = _nowTime
        }
    }
}
