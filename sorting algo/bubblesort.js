// implement bubble sort in js
// write a fn to sort the given array nums in ascending order

// input nums =[29,10,14,37,14] output= [10,14,14,29,37]

// notes: Bubble sort takes two items and compares them

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    //n
    for (j = 0; j < n - i - 1; j++) {
      //n
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));

/*
best time complexity =0(n)
best time complexity =0(n*n)
best time complexity =0(n/2*n)

Space Complexity complexity =0(1)
*/
