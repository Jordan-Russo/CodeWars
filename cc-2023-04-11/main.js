// url: https://www.codewars.com/kata/534eb5ad704a49dcfa000ba6
// The task
// Your task, is to calculate the minimal number of moves to win the game "Towers of Hanoi", with given number of disks.

// What is "Towers of Hanoi"?
// Towers of Hanoi is a simple game consisting of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

// The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.
const hanoi = diskCount => 2**diskCount-1
// only calculate number of moves to solve the puzzle
// As we add an additional disc, we need all of the steps before 
// but twice to move it from an auxilliary rod to the target rod plus an additional step for the new disk
// we multiply the previous amount by 2 and add 1
// which is the same as subtracting one from 2 to the power of diskCount.
// looking forward to implementing a hanoi algorithm.
// since we're working with powers of two we can also solve this problem with bitwise operators but readability may make it hard to follow

// const hanoi = diskCount => (1 << diskCount) - 1
// shift 1 (2^0) n times to become 2^n, then subtract 1