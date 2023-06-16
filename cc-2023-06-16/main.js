// Given the initial pattern of the starting Xbonacci sequence as an Array
// Return an array containing the first n(non-negative integer) of the sequence
// Examples:
  // Xbonacci([0,1],10) -> [0,1,1,2,3,5,8,13,21,34]
  // Xbonacci([1,1],10) -> [1,1,2,3,5,8,13,21,34,55]
  // Xbonacci([0,0,0,0,1],10) -> [0,0,0,0,1,1,2,4,8,16]
  // Xbonacci([1,0,0,0,0,0,1],10) -> [1,0,0,0,0,0,1,2,3,6]
  // Xbonacci([1,0,0,0,0,0,0,0,0,0],20) -> [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]
// If n <= signature.length then return the part of the array
// Otherwise, initialize 2 copies of the array, one to hold fullSequence, 
// another to hold the last signature.length terms (well call activeSequence)
// while the length of the sequence array is less than n
  // sum the terms in the activeSequence and push the value to both the fullSequence, and the activeSequence
  // the active sequence will then remove the first term in itself
// we return the full sequence
function Xbonacci(signature,n){
  if(n <= signature.length){return signature.slice(0, n)}
  // for small n
  let fullSeq = [...signature]
  let activeSeq = [...signature]
  while(fullSeq.length < n){
    const next = activeSeq.reduce((sum, term) => sum + term)
    fullSeq.push(next)
    activeSeq.push(next)
    activeSeq.shift()
  }
  return fullSeq
}
// 2nd attempt - O(n) solution
function Xbonacci(signature,n){
  if(n <= signature.length){return signature.slice(0, n)}
  // for small n
  let fullSeq = [...signature]
  let next = signature.reduce((sum, term) => sum + term)
  while(fullSeq.length < n){
    fullSeq.push(next)
    next = next * 2 - fullSeq[fullSeq.length - 1 - signature.length]
  }
  return fullSeq
}