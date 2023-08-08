// url: https://www.codewars.com/kata/55beec7dd347078289000021
// Linked Lists - Length & Count
// Implement Length and Count methods that work on linked lists
  // Length returns how many nodes are in the linked list (doesn't count null objects).
  // Count returns how many nodes have a value equal to the provided data.
// Nodes are built with the data property to access the value and the next property to access the next node.

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let size = 0
  while(head !== null){
    size++
    head = head.next
  }
  return size
}

function count(head, data) {
  let frequency = 0
  while(head !== null){
    if(head.data === data){frequency++}
    head = head.next
  }
  return frequency
}