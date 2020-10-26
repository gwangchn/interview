Function.prototype.myCall = function (context) {
    if (typeof this != 'function') {
        throw new TypeError('this is not a function')
    }
    context.fn = this;
    var arr = [];
    for (var i = 1; i < arguments.length; i++) {
        arr.push('argument[' + i + ']')
    }
    var result = eval('context.fn(' + arr + ')');
    delete context.fn;
    return result;
}

Function.prototype.myApply = function (context, arr) {
    if (typeof this != 'function') {
        throw new TypeError('this is not a function')
    }
    context.fn = this;
    var result = [];
    if (!arr) {
        result = context.fn()
    } else {
        var args = [];
        for (var i = 1; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return result;
}

Function.prototype.myBind = function (context) {
    if (typeof this != 'function') {
        throw new TypeError('this is not a function')
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var F = function () { };
    F.prototype = this.prototype;
    var bound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof F ? this : context, args.concat(bindArgs))
    };
    bound.prototype = new F();
    return bound;
}
