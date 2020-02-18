function bubbleSort(array) {
  return []
}

function swapHelper(array) {
  for(i=0; i<array.length; i++) {
    if (array[i] > array [i+1]) {
      let temp = array[i]
      array[i] = array[i+1]
      array[i+1] = temp
    }
  }

  return array
}
