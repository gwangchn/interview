Promise.all = function (arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            throw new TypeError(`argument must be a array`)
        }
        var length = arr.length;
        var resolveNum = 0;
        var resolveResult = [];
        for (let i = 0; i < length; i++) {
            arr[i].then(data => {
                resolveNum++;
                resolveResult[i] = data;
                if (resolveNum == length) {
                    return resolve(resolveResult)
                }
            }).catch(data => {
                return reject(data)
            })
        }
    })

}
