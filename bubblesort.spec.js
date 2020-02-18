describe('Bubble Sort Function', function(){


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

});


describe('Swap Helper Function', function(){

  it('handles an array with two elements', function(){
    expect( swapHelper( [1,2]) ).toEqual( [1,2] );
  });

  it('swaps elements if the first element is less than the one adjacent', function(){
    expect( swapHelper( [2,1]) ).toEqual( [1,2] );
  });

});
