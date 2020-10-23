// https://segmentfault.com/a/1190000016418021

function removeDup(arr) {
    var result = [];
    var hashMap = {};
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i]
        if (!hashMap[temp]) {
            hashMap[temp] = true
            result.push(temp)
        }
    }
    return result;
}

function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}

Array.from(new Set(arr));

[...new Set(arr)]
