// url: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a
// volume of n , the cube above will have volume of (n — and so on until the top which will have a
// volume of 13.
// You are given the total volume m of the building. Being given m can you find the number n of cubes
// you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb,
// ) will bean integer m and
// you have to return the integer n such asn -k (n — 1) 3 4- (n — 2) 3 -F ... 4- 13 = m ifsuch an
// exists or -1 if there is no such n.
// Examples:
// findNb(1071225) 45
// findNb(91716553919377) -1
function findNb(m) {
  let n = 0;
  const cubeSum = (n) => (((n**2) * (n+1)**2) / 4);
  while (cubeSum(n) < m) {
    n++
  }
  return (cubeSum(n) !== m) ? -1 : n;
}
// y = x^2 (x + 1) ^2 / 4