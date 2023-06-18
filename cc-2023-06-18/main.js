// Given an odd integer
// return a string diamond of it
// return null, if the number is negative or is even.
// examples:
  // diamond(1) -> "*\n"
  // diamond(3) -> " *\n***\n *\n"
  // diamond(5) -> "  *\n ***\n*****\n ***\n  *\n"
  // diamond(2) -> null
  // diamond(-3) -> null
  // diamond(0) -> null
// Diamond function takes a number
  // if n is even or negative
    // return null
  // initialize an array
  // loop through half of n, rounded up.
    // if each loop, push (n / 2) - i, rounded down spaces which is followed by an '*\n'
  // push the first (n / 2) - 1 elements in the array backwards in element order to mirror the diamond
  // make the diamond string by joining the elements in the array
  // return the diamond string
  
  function diamond(n){
    if(n % 2 === 0 || n < 0){return null}
    let half = Math.floor(n / 2)
    let diamondArr = []
    for(let i = 0; i <= half; i++){
      const diamondRow = ' '.repeat(half - i) + '*'.repeat(2*i + 1) + '\n'
      diamondArr.push(diamondRow)
    }
    diamondArr.push(...diamondArr.slice(0, -1).reverse())
    const diamondStr = diamondArr.join('')
    return diamondStr
  }
  // String methods only.
  function diamond(n){
    if(n % 2 === 0 || n < 0){return null}
    let half = Math.floor(n / 2)
    let diamondStr = ''
    for(let i = 0; i < n; i++){
      const spaceCount = Math.abs(half - i)
      const asteriskCount = Math.abs(n - 2 * spaceCount)
      const diamondRow = ' '.repeat(spaceCount) + '*'.repeat(asteriskCount) + '\n'
      diamondStr += diamondRow
    }
    return diamondStr
  }