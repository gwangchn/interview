// 展平一级
function flat(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i]))
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

//展平多层
function flattenByDeep(array, deep) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && deep >= 1) {
            result = result.concat(flattenByDeep(array[i], deep - 1))
        } else {
            result.push(array[i])
        }
    }
    return result;
}
