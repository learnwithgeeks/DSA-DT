function sort(arr, i = 0) {
  if (i === arr.length) return arr;
  if (arr[i - 1] > arr[i]) {
    let tmp = arr[i - 1];
    arr[i - 1] = arr[i];
    arr[i] = tmp;
  }
  return sort(arr, i + 1);
}
console.log(sort([5, 1, 2, 4]));
