# blog post

iterate over i for the length of the array
set a variable "j" to equal i minus 1
set a variable temp to equal array at index I

while j is greater than or equal to 0 and temp is less than array at index j

let array at index j be equal to array at index j plus 1
reset j to j -1

set temp to equal array at index j plus 1

the first pass through will read over the array and move the 4 to the front of the array

the second pass through will read over the array and skip over the 8 and move the 15 to the third index position in the array

the third pass through will read over the array and move 16 to the fourth index position

the fourth pass through will read over the array and move 23 to the fifth index position leaving 42 at the final index position

the fifth pass through will not alter anything but will end the looping and return the array

