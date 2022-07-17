const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,];
let iteration = 0;

// O(log2n * n)
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    iteration++;
    const element = array[i];
    
    if (element === pivot) {
      continue;
    }
    if (element < pivot) {
      less.push(element);
    } else {
      greater.push(element);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}


console.log(quickSort(arr));
console.log({ iteration });