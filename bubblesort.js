// function bubbleSort(array) {
//   return []
// }

// function swapHelper(array) {
//   for(i=0; i<array.length; i++) {
//     if (array[i] > array [i+1]) {
//       let temp = array[i]
//       array[i] = array[i+1]
//       array[i+1] = temp
//     }
//   }

//   return array
// }


function bubbleSort(array) {
  let len = array.length;
  let result = array;
  for (i = 0; i < len; i++) {
    result = swapHelper(result);
    console.log(swapHelper(result));
  }
  return result;
}
function swapHelper(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  return array;
}
