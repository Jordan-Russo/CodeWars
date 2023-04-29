url: https://www.codewars.com/kata/563f037412e5ada593000114

// Money, Money, Money

// Given a principal, interest rate, tax rate, and target

// Return how many years, T, it takes to get the principal to grow to the target amount rounded up.
// The sum of money is at the bank, interest is paid then t

// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.11
// Returns 3

// I finally was able to realize the O(1) solution before starting the O(n) one.

// How to make a custom log = Math.log2(target/principal) / Math.log2(1 + interestRate(1-taxRate))
// make a variable for each argument in the log
// take the log with the post-tax gross rate

// Return years
function calculateYears(principal, interest, tax, desired) {
  const postTaxMultiplier = 1+(interest*(1-tax))
  const investmentGrowthRatio = desired/principal
    return Math.ceil(
      Math.log2(investmentGrowthRatio)/
      Math.log2(postTaxMultiplier))
      // Division of two logs /w same base is the same as finding the power of the bottom value to be equal to the top value.
}