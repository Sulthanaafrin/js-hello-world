/*let expression1 = 5 > 7;
let expression2 = 420 >= 69;

console.log(5 !== "5");

//console.log(expression1 && expression2);

//console.log(!(expression1 && expression2));*/

const input = require('readline-sync');

let myName = input.question("What`s your name?");
let myAge = Number(input.question("\nHow old are you"));
let myPhrase = " ";

if (myAge < 18) {
    myPhrase ="parental supervision advised.";
} else if (myAge < 26) { 
    myPhrase ="Imagine paying for health insurance.";
} else {
    myPhrase ="Imagine having health insurance...";
}
