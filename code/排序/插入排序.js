function insertSort(arr) {
  const l = arr.length
  if (l < 2) return arr

  for (let i = 1; i < l; i++) {
    let j = i - 1
    if (arr[j] > arr[i]) {
      let temp = arr[i]
      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = temp
    }
  }

  return arr
}
