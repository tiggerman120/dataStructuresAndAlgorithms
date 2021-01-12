# blog post

mergeSort(arr)
n is equal to the length of the array

if n is greater than 1
mid is equal to the length of the array divided by two
left is equal to the array from 0 to mid
right is equal to the array at index mid to n

mergeSort(left)
mergeSort(right)

merge(left, right, arr)

merge(left, right, arr)

i is equal to 0
j is equal to 0
k is equal to 0

while i is less than the length of left and j is less than the length of right
if left at index i is less than or equal to right at index j
i is equal to i + 1

else

array at index k is equal to right at index j
j is equal to j + 1

outside of the if statement k is equal to k + 1

if i is equal to the length of left
set remaining entries in array to remaining values in right
else
set remaining entries in array to remaining  values in left

the array splits in half
both sides get sorted individually then they are merged together