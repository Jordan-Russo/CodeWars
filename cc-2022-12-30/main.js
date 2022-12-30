// url: https://www.codewars.com/kata/554ca54ffa7d91b236000023
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
  let modArr = [...arr];
  for (let i = 0; i < modArr.length; i++){
    while (modArr.filter(number => number === modArr[i]).length > n){
      const position = modArr.lastIndexOf(modArr[i]);
      modArr.splice(position, 1);
    }
  }
  return modArr;
}
// More efficient verison: as you iterate through the list add each term as a key to the object and set its value if to 1 it doesn't exist otherwise check if count is greater than or equal to n and if incrementing it would make it larger then n then don't add it to the array.