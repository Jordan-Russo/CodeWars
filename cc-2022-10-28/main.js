// url: https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407
// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
function alphabet(ns) {
  const nums = ns.sort((a, b) => a - b)
  const a = nums.shift();
  const b = nums.shift();
  const aB = nums.splice(nums.indexOf(a * b), 1);
  const cD = nums.pop();
  const c = nums.shift();
  return cD / c;
}