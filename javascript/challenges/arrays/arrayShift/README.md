# Code Challenges

## Shift an Array code challenge 02

### Challenge

write a function named insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built in methods available in javascript, return an array with the new value added at the middle index

### approach and efficiency

declare function named insertShiftArray that takes in an array of values and a value to be added
find the middle index of the original array using array.length divided by 2 rounded up
create a new array
Iterate over the original array
apply first half of the original array to the new array
at the middle index insert the value to be added into the new array
adjust the remaining index numbers as to be the newArr at newArr.length equal to arr at i
return new array

### solution

[Whiteboard](../../../../javascript/assets/array-shift.jpg)

### Authors

Garrett Cintron
Matt Ravenmoore