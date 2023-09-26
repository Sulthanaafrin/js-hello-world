/*const input = require('readline-sync');

let protien = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let meal = [ ];

meal.push(protien);
meal.push(grain);
meal.push(vegetables);
meal.push(beverage);
meal.push(dessert);

console.log(meal[0][1], meal[1][2], meal[2][3], meal[3][3]);

for (let i = 0; i < protien.length -5; i++ ){
    console.log((protien[i]));
}

for (let i = 1; i < grain.length -4; i++ ){
    console.log(grain[i])
}

for (let i = 4; i < vegetables.length -1; i++ ){
    console.log(vegetables[i])
}



for (let i = 2; i < beverage.length -3; i++ ){
    console.log(beverage[i])
}

for (let i = 3; i < dessert.length -2; i++ ){
    console.log(dessert[i])
}


const input = require('readline-sync');

let meals = input.question('Please select no of Meals: ');

while (meals <= 0 || meals < 6 ) {
    meals = input.question("Meals is Ready")
}
console.log("meals are ready")*/

/*
function sayHello() {
    console.log("Hello, World!");
}



function sayHello() {
    console.log("Hello, World!");
}

sayHello();

function doNothing() { }

let returnVal = doNothing();
doNothing();

console.log(returnVal);

function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToN(3));

function isEven(n) {
    if (n % 2 === 0)
        console.log(isEven(4));
    console.log(isEven(9));
}

function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i = 0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');


let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();


let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}
 
function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return reverse(str) === str;
}

function isPalindrome(str) {

    let reversed = ' ';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed === str;
}

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function isPalindrome(str) {
    return reverse(str) === str;
}

function plusTwo(num) {
    return num + 2;
}


function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');

let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));

let day = "Thursday";
 day = 32.5;
 day = 19;
 console.log(day);

 console.log(1 + 5 % 3);

 console.log(2 ** 2 ** 3 * 3);

 console.log(16 - 2 * 5 / 3 + 1);*/

 const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);