Array.prototype.filter = function (fn, context) {
    if (typeof fn != 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    let arr = this;
    let result = []
    for (var i = 0; i < arr.length; i++) {
        let temp = fn.call(context, arr[i], i, arr);
        if (temp) {
            result.push(arr[i]);
        }
    }
    return result
}
