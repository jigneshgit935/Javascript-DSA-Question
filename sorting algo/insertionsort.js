// implement insertion sort in js
// write a fn to sort the given array nums in ascending order

// input nums =[29,10,14,37,14,33,8,11] output= [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// best time complesity = 0(n)
// Worst time complesity = 0(n*n)
// Average time complesity = 0(n*n)
// space complesity = 0(1)
