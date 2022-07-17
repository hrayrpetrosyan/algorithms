const array = [0,1,2,3,5,6,7,9,10,12,14,15];

// O(log2n)
function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let iteration = 0;

  let foundIndex = -1;

  while (foundIndex === -1 && start <= end) {
    iteration++;

    const middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      foundIndex = middle;
    } else if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  console.log({ iteration });
  return foundIndex;
}

console.log(binarySearch(array, 12));




function binarySearchRecursive(array, item, start, end) {
  const middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return binarySearchRecursive(array, item, start, middle - 1);
  } else {
    return binarySearchRecursive(array, item, middle + 1, end);
  }
}

console.log(binarySearchRecursive(array, 12, 0, array.length));