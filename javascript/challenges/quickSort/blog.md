# blog post

create a function 'swap' that accept an array a leftIndex and a right index
create temp variable equal to the array at left index
let the right index be equal to the left index
let temp be equal to the right index
swaps the numbers on either side of the pivot if the left side is greater than the right side

create a function 'partition' which splits the two sides and sorts them it accepts three params an array, left, and right

let pivot be equal to the middle array index
arr[Math.floor((right + left) / 2)];

create two iterators one for left one for right

while i is less than or equal to j
while the array at index i is less than the pivot iterate the left
while the array at index j is greater than the pivot deiterate j

if the left is less than or equal to the right
swap(arr, left, right)
iterate i
deiterate j

return i

create function quickSort which accepts an array a left and a right
instantiate index
if the length of the array is greater than 1
capture partitions result

if left is less than the index minus 1
quicksort the entire array
if index is less than right
quicksort the right half of the array

return the array