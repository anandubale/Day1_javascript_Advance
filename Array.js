//Array- The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.


//Array Methods:

// //literal constructor
// [element0, element1, /* ... ,*/ elementN]

// // construct from elements
// new Array(element0, element1, /* ... ,*/ elementN)

// // construct from array length
// new Array(arrayLength)


// //E.g
// //Array literal notation: Arrays can be created using the literal notation:
// let fruits = ['Apple', 'Banana'];

// console.log(fruits.length); // 2
// console.log(fruits[0]);     // "Apple"

// //Array constructor with a single parameter:
// let fruits = new Array(2);

// console.log(fruits.length); // 2
// console.log(fruits[0]);     // undefined

// //Array constructor with multiple parameters:
// let fruits = new Array('Apple', 'Banana');

// console.log(fruits.length); // 2
// console.log(fruits[0]);     // "Apple"

 var at;
//1. array.at--> takes an integer value and returns the item at that index,

// const arrayAt = [1,2,3,4,5];
// let index=3;
// console.log(`arrayat using index: ${arrayAt.at(index)}`);

// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

var cancat
// //2.array.cancat --> used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

var copywithin
//array.copywithin-Copies part of an array to another location in the same array and returns it without modifying its length.
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // copy to index 0 the element at index 3
// //copyWithin(target, start, end)
// console.log(array1.copyWithin(0, 3, 4));

var after
// //array.filter- creates a new array with all elements that pass the test implemented by the provided function.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);  //-->output: Array ["exuberant", "destruction", "present"]

var find  
//array.find --> returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found); // expected output: 12

var map;

//array.map-->creates a new array populated with the results of calling a provided function on every element in the calling array.

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1); // expected output: Array [2, 8, 18, 32]

var foreach;

//array.foreach-executes a provided function once for each array element
// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));


var pop; 
//array.pop -removes the last element from an array and returns that element.
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop()); // expected output: "tomato"
// console.log(plants)

var shift;
//arrray.shift -removes the first element from an array and returns that removed element
// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1); // expected output: Array [2, 3]
// console.log(firstElement);// expected output: 1

var shift;
//array.shift -adds one or more elements to the beginning of an array and returns the new length of the array.

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));// expected output: 5

// console.log(array1);// expected output: Array [4, 5, 1, 2, 3]




var push;
//array.push -adds one or more elements to the end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);// expected output: 4
// console.log(animals);// expected output: Array ["pigs", "goats", "sheep", "cows"]


var reduce;
//array.reduce-The final result of running the reducer across all elements of the array is a single value.
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial); // expected output: 10


var reverse;

//array.reverse -Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

// const array1 = ['one', 'two', 'three'];
// console.log("Normal: "+ array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);// expected output: "reversed:" Array ["three", "two", "one"]


var slice;

//array.slice- returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
//where start and end represent the index of items in that array. The original array will not be modified.


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));// expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));// expected output: Array ["camel", "duck"]
// console.log(animals.slice());// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


var sort;
//array.sort - sorts the elements of an array in place and returns the sorted array. 

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);// expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);// expected output: Array [1, 100000, 21, 30, 4]

// const array2 = [1,3,6,2,5,4,6];
// console.log(array2.sort()); //expected output [1, 2, 3, 4, 5, 6, 6]



var splice 

//array.splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//splice(start, deleteCount, item1, item2, itemN)

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');// replaces 1 element at index 4
// console.log(months);// expected output: Array ["Jan", "Feb", "March", "April", "May"]

