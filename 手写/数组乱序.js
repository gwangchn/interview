// https://juejin.im/post/6844903863812620296

// 取巧的一种算法，但是每个位置乱序的概率不同
function mixArr(arr) {
    return arr.sort(() => {
        return Math.random() - 0.5;
    })
}

// 著名的Fisher–Yates shuffle 洗牌算法
function shuffle(arr) {
    let m = arr.length;
    while (m > 1) {
        let index = parseInt(Math.random() * m--);
        [arr[index], arr[m]] = [arr[m], arr[index]];
    }
    return arr;
}
