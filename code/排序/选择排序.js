function selectSort(arr){
  const l = arr.length
  if (l < 2) return arr

  for (let i = 0; i < l - 1; i++) {
    let index = i
    for (let j = i + 1; j < l - 1; j++) {
      if (arr[index] > arr[j]) {
        index = j
      }
    }
    if (index !== i) [arr[index], arr[i]] = [arr[i], arr[index]]
  }

  return arr
}
