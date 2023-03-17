function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

const arr = [4, 2, 1, 3, 5];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5]
