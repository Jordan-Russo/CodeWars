// url: https://www.codewars.com/kata/513e08acc600c94f01000001
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
function rgb(r, g, b){
  const hex = n => {
    n = Math.max(0, n);
    n = Math.min(n , 255);
    n = n.toString(16).toUpperCase()
    if (n.length === 1){n = '0'+n};
    return n;
  }
  return [r,g,b].map(value => hex(value)).join('');
}