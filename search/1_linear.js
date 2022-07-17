const array = [1,4,5,8,5,1,2,7,5,2,11];

// O(n)
function linearSearch(array, item) {
  let iteration = 0
  for (let i = 0; i < array.length; i++) {
    iteration++;
    if (array[i] === item) {
      console.log({ iteration });
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8));