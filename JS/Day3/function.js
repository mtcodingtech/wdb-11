// function greet() {
//   console.log("hi");
//   return "Hello";
// }
// console.log(greet());

// ****************************
// const greet = function () {
//   return "hello";
// };
// console.log(greet())


// *******************
// Arrow function
// const greet = () => "hello";

// console.log(greet())

// ***********************
// (function(){
//     console.log("Hi")
// })()

// *************************

// console.log(username)
// let username = "John";

// let greet = myFunc();

// function myFunc() {
//     console.log("hi")
// }

// ****************************

function sum(num1 = 10, num2 = 20){
    console.log(num1, num2)
    return num1 + num2;
}

console.log(sum(1, 20))
console.log(sum(5, 4))
console.log(sum())