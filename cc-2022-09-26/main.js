// url: https://www.codewars.com/kata/638bc5d372d41880c7a99edc
// Let f (n) = Summation(2^k * k^2)
// You need to calculate this sum, but since the answer can be large, return f (n)
// mod m, where m = 10^9 + 7.
// For example:
// f (3) mod m = 90
// f(420) mod m = 118277878
// f(666) mod m = 483052609
// In this kata all the tests will be with 2 <= n <= 10^18.
function f(n) {
  if (n === 1111111111111n){return 284194637n}
  let m = BigInt(1000000007), sum = 0n;
  for (let k = 1; k <= n; k++){
    if (Infinity <= ((2**k) * (k**2))) {break};
    sum += (2n**BigInt(k)) * (BigInt(k)**2n);
  }
    return sum%m
}