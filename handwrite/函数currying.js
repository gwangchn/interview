// 函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数
// 并且返回接受余下的参数而且返回结果的新函数的技术，是高阶函数的一种用法。
// 比如求和函数add(1,2,3), 经过柯里化后变成add(1)(2)(3)

// 限制参数个数
// 收集参数，达到要求后执行
function currying(fn, ...args) {
    if (fn.length <= args.length) {
        return fn(...args)
    }
    return function (...args1) {
        return currying(fn, ...args, ...args1)
    }
}
function add(a, b, c) {
    return a + b + c
}
add(1, 2, 3) // 6
var curryingAdd = currying(add);
curryingAdd(1)(2)(3) // 6


// 当柯里化参数没有具体个数时候
function myCurry(fn, ...args) {
    return (...args1) => {
        return args1.length > 0 ? myCurry(fn, ...args, ...args1) : fn(...args)
    }
}
function allAdd(...args) {
    return args.reduce((a, b) => (a + b))
}
let myCurryAdd = myCurry(allAdd)
myCurryAdd(1)(2)(3)()



// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;
function add(...args) {
    const _adder = (...args2) => {
        args.push(...args2)
        return _adder
    }

    _adder.toString = () => {
        return args.reduce((a, b) => {
            return a + b
        })
    }

    return _adder
}
