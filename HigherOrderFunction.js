
//Abstraction:- hide details and give us the ability to talk about problems at a higher (or more abstract) level.

var Abstracting_Repeatation;

//E.g. 
//problem:-program to do something a given number of times. You can write a for loop for that, like this:

var General_Way
//1St-Way
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }

//Can we abstract “doing something N times” as a function? Well, it’s easy to write a function that calls console.log N times.

var Normal_way_With_Little_Abstraction
//2Nd-Way --->Yess we can
// function repeatLog(n) {
//     for (let i = 0; i < n; i++) {
//       console.log(i);
//     }
//   }
// repeatLog(5);

//But But But......

//what if we want to do something other than logging the numbers?
//“doing something” can be represented as a function and functions are just values ------> we can pass our action as a function value.

var Abstraction_by_Passing_Function_as_Argument
//3Rd -Way  ---> by passing function to function.
// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }
  
//   repeat(10, console.log);


//E.g if we are not passing Predefined Function 
//can make our own Like,
// let labels = [];
// repeat(5, i => {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);




var Higher_Order_Function;

//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
//Higher-order functions allow us to abstract over actions, not just values. 

var Create_New_Function;
//1.We can have functions that create new functions.

// function greaterThan(n) {
//     return m => m > n;
//   }
//   let greaterThan10 = greaterThan(10);  //greaterThan10 -- is New Function we have Created
//   console.log(greaterThan10(11));   //Output : true

var Function_that_can_change_Other_Function
//2.we can have functions that change other functions.

// function noisy(f) {
//     return (...args) => {
//       console.log("calling with", args);
//       let result = f(...args);
//       console.log("called with", args, ", returned", result);
//       return result;
//     };
//   }
// noisy(Math.min)(3, 2, 1);   //output : calling with (3) [3, 2, 1]
//                              called with (3) [3, 2, 1] , returned 1
  

var With_new_type_of_control_flow;
//3.We can even write functions that provide new types of control flow.

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//       action(i);
//     }
//   }
  

// function unless(test, then) {
//     if (!test) then();
//   }
  
//   repeat(3, n => {
//     unless(n % 2 == 1, () => {
//       console.log(n, "is even");
//     });
//   });

//E.g There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.

// ["A", "B"].forEach(l => console.log(l))



//https://eloquentjavascript.net/05_higher_order.html

//repeat(n,ation)---->   //n : 3              
                        //action :n => {unless(n % 2 == 1, () => {console.log(n, "is even");})}
                        //unless(test ,then)   ---> test: n % 2 == 1
                                                // then: () => {console.log(n, "is even");}
//https://eloquentjavascript.net/01_values.html