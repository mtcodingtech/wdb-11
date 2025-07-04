// let fruits = [];
// fruits[0] = "apple";
// console.log(fruits);

// *********************
// let fruits = new Array("apple", "orange", "mango");
// console.log(fruits)

// *******************************

// let fruits = ["apple", "orange", "mango"];

// console.log(fruits.length)
// let str = fruits.toString();
// console.log(str, typeof str)

// **********************************

// let fruits = ["apple", "orange", "mango"];
// fruits.push("kiwi");
// fruits.pop();
// fruits.unshift("kiwi")
// fruits.shift();

// console.log(fruits)

// ***********************************

// let fruits = ["apple", "orange", "mango", "kiwi", "lemon"];
// // fruits.splice(2, 2, "pineapple")
// let result = fruits.slice(0, -1);
// console.log(result)

// *******************************
// let fruits = ["apple", "orange", "mango", "kiwi", "lemon"];

// let result1 = fruits.forEach((fruit) => fruit);

// let result2 = fruits.map((fruit) => fruit);

// console.log(result1);
// console.log(result2);


// ***********************************
let fruits = ["apple", "orange", "mango", "kiwi", "lemon"];

// let result = fruits.find((fruit) => fruit.length > 4)
let result = fruits.filter((fruit) => fruit.length > 4)
console.log(result)
