// implement Selection sort in js
// write a fn to sort the given array nums in ascending order

// input nums =[29,10,14,37,14] output= [10,14,14,29,37]

// notes: it will take one item and it will compare to all till it found smaller than him and in last it will swapp

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([29, 10, 14, 37, 14]));

/*
 time complexity =0(n*n)


Space Complexity complexity =0(1)
*/
