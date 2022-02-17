var Function;

//procedure—a set of statements that performs a task or calculates a value
//procedure to qualify as a function, it should take some input and return an output 
//where there is some obvious relationship between the input and the output


// function square(number) {
//     return number * number;
//   }

var Function_calling;
//Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.

//Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code),


var AnonymousFunction;
//Anonymous function:- 

// const square = function(number) { return number * number }
// var x = square(4) // x gets the value 16

var ArrowFunction;
//Arrow Function - fat arrow function:

// var a = ['Hydrogen','Helium','Lithium','Beryllium'];
// var a2 = a.map(function(s) { return s.length; }); //Normal Anonymous Function
// console.log(a2); // logs [8, 6, 7, 9]
// var a3 = a.map(s => s.length);                     //Arrow Function- s => s.length vs function(s) { return s.length; }
// console.log(a3); // logs [8, 6, 7, 9]

var Function_Expression_Use
//Function expressions are convFenient when passing a function as an argument to another function. 
//The following example shows a map function that should receive a function as first argument and an array as second argument:

//E.g


// function map(f, a) {
// let result = []; // Create a new Array
// let i; // Declare variable
// for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
// }
// const f = function(x) {
//      return x * x * x;
// }
// let numbers = [0, 1, 2, 5, 10];
// let cube = map(f,numbers);
// console.log(cube);

var Function_Based_on_Conditions
//For example, the following function definition defines myFunc only if num equals 0:

// var myFunc;
// if (num === 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }


var Object_in_Function;


// const myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969
//   };

// function showProps(obj ,objName) {
//     let result = '';
//     for (let i in obj) {
//       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//       if (obj.hasOwnProperty(i)) {
//         result += `${objName}.${i} = ${obj[i]}\n`;
//       }
//     }
//     console.log(result);
//   }

// showProps(myCar,'myCar');


var function_calling_function;

// function factorial(n) {
//     if ((n === 0) || (n === 1))
//       return 1;
//     else
//       return (n * factorial(n - 1));
//   }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));

var Imeditly_invoked_Function;



var Recursion;

//Recursion Function: function that call itself.

//Comapare this:

// var x = 0;
// while (x < 10) { // "x < 10" is the loop condition
//    // do stuff
//    x++;
// }

//with this:

// function loop(x) {
//     if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//       return;
//     // do stuff
//     loop(x + 1); // the recursive call
//   }
//   loop(0);

//Recusrsion is Analogous to Loop
//But However, some algorithms cannot be simple iterative loops. For example,
//getting all the nodes of a tree structure (such as the DOM) is easier via recursion:

//Recursion- 1 Point  Loop-0 points

// function walkTree(node) {
//     if (node == null) //
//       return;
//     // do something with node
//     for (var i = 0; i < node.childNodes.length; i++) {
//       walkTree(node.childNodes[i]);
//     }
//   }


//Nested Function + Closer

var NestedFunction;

//You may nest a function within another function. 
//The nested (inner) function is private to its containing (outer) function.

// function addSquares(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }
//   a = addSquares(2, 3); // returns 13
//   console.log(a);
//   b = addSquares(3, 4); // returns 25
//   console.log(b);
//   c = addSquares(4, 5); // returns 41
//   console.log(c);



var closure;
//Nested Function is form of Closure 
// Expression (mostly function) that can have free variables together with an environment 
//that binds those variables (that "closes" the expression). 

//Nested Function can inherit arguments and variables of its containing function.
//inner function contains the scope of the outer function.


// The inner function can be accessed only from statements in the outer function.
// The inner function forms a closure: the inner function can use the arguments and variables of the outer function, 
// while the outer function cannot use the arguments and variables of the inner function.

// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
//   //One Way of asssigning the Values:
//   fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it.
//   result = fn_inside(5); // returns 8
//   console.log(result);

// //Another Way of asssigning the Values:

//   result1 = outside(3)(5); // returns 8
//   console.log(result1);


//-----------------------------------------------------------------------------------------------------------------------------------------------------X

//Multiply Nested Function

// function A(x) {
//     function B(y) {
//       function C(z) {
//         console.log(x + y + z);
//       }
//       C(3);
//     }
//     B(2);
//   }
// A(1); // logs 6 (1 + 2 + 3)



//Or You have do Like;

// function A(x) {
//     function B(y) {
//       function C(z) {
        
//         return x + y + z;
//       }
//       return C;
//     }
//     return B;
// }
 
// fn_B = A(1);
//  fn_C = fn_B(2);
// var Result = fn_C(3);
// console.log(Result);



// B forms a closure including A (i.e., B can access A's arguments and variables).
// C forms a closure including B.
// Because B's closure includes A, C's closure includes A, C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A, in that order.




//Closures --------> one of the most powerful features of JavaScript. 
//JavaScript allows -----> nesting of functions 
//                  ------>grants the inner function full access to all the variables and functions 




var closer;

//A closure is created when the inner function is somehow made available to any scope outside the outer function.

// var pet = function(name) {   // The outer function defines a variable called "name"
//     var getName = function() {
//       return name;             // The inner function has access to the "name" variable of the outer function
                               
//     }
//     return getName;            // Return the inner function, thereby exposing it to outer scopes
//   }
//   myPet = pet('Vivie');
  
//   console.log(myPet());                     // Returns "Vivie"



