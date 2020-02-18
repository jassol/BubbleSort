// describe('Bubble Sort Function', function(){


//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });

// });


// describe('Swap Helper Function', function(){

//   it('handles an array with two elements', function(){
//     expect( swapHelper( [1,2]) ).toEqual( [1,2] );
//   });

//   it('swaps elements if the first element is less than the one adjacent', function(){
//     expect( swapHelper( [2,1]) ).toEqual( [1,2] );
//   });

// });

describe(‘Bubble Sort Function’, function() {
  it(‘handles an empty array’, function() {
    expect(bubbleSort([])).toEqual([]);
  });
  // it(‘handles an array that require more than one swap’, function() {
  //   expect(bubbleSort([1, 2, 1, 0, 3, 5])).toEqual([0, 1, 1, 2, 3, 5]);
  // });
  it(‘handles an array that require more than one swap’, function() {
    expect(bubbleSort([1, 2, 1, 0])).toEqual([0, 1, 1, 2]);
  });
});
describe(‘Swap Helper Function’, function() {
  it(‘handles an array with two elements’, function() {
    expect(swapHelper([1, 2])).toEqual([1, 2]);
  });
  it(‘handles an array with more than two elements’, function() {
    expect(swapHelper([1, 2, 1, 3, 5])).toEqual([1, 1, 2, 3, 5]);
  });
  // it(‘swaps elements if the first element is less than the one adjacent’, function() {
  //   expect(swapHelper([2, 1])).toEqual([1, 2]);
  // });
});
