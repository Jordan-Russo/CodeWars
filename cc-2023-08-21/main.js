// Given an array along with the size of chunks, integer greater than 0 (natural number)
// Return an array that has elements chunked into nested arrays of maximal length the chunk size.
    
console.log(chunkArray([1,2,3], 1), [[1],[2],[3]])
console.log(chunkArray([], 10), [])
console.log(chunkArray([10,20,30,40,50], 2), [[10,20], [30,40], [50]])

// Looks like O(n^2) BUT IS ACTUALLY O(n)
  // the interval we use to loop through the array is = to array.slice size and grows proportional to the amount of children.

  function chunkArray(arr, size){
    const chunkedArr = []
    // initialize chunkedArray as an empty array
    for(let i = 0; i < arr.length; i += size){
    // loop through the arr
      // loop is incremented by chunk size
      chunkedArr.push(arr.slice(i, i + size))
      // we add the subarray from the starting index with a length of the chunk size or less to the array
    }
    return chunkedArr
    // we return the chunked array
  }