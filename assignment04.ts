//Assignment-4  for the week-5 is:

// Q-1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

// Q-1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

let array = [2, 3, 4, 5, 6, 7];
let indexValue = 2;
let valueToBeInserted = 10;
function ArrayWithIndexAndValue(array: number[], index: number, value: number) {
  array.splice(index, 0, value);

  return array;
}
console.log("Splice 10 on index#2 = "+ArrayWithIndexAndValue(array,indexValue,valueToBeInserted))
console.log("Change-1");

// Output -------------------------------------
// Splice 10 on index#2 = 2,3,10,4,5,6,7