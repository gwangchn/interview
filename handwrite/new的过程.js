// 1、创建一个空的简单 JavaScript 对象（即{}）；
// 2、链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 3、将步骤1新创建的对象作为 this 的上下文 ；
// 4、如果该函数没有返回对象，则返回 this。

// 以 var child = new Parent()为例：
function newParent() {
    var obj = {}; // 首先创建一个对象
    obj.__proto__ = Parent.prototype; // 然后将该对象的__proto__属性指向构造函数的protoType
    var result = Parent.call(obj) // 执行构造函数的方法，将obj作为this传入
    return typeof (result) == 'object' ? result : obj
}