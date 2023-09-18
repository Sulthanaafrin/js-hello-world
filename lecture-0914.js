/*let expression1 = 5 > 7;
let expression2 = 420 >= 69;

console.log(5 !== "5");

//console.log(expression1 && expression2);

//console.log(!(expression1 && expression2));

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
}*/

let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

let myStr = "Index";

console.log(myStr[0] === 'I');
let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;



let word = "JavaScript";

console.log(word.slice(1,6));

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let pluralNoun = 'women' ;
let name = 'afii';
let verb = 'look';
let adjective = ' beautiful';
let color = 'green';

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")
console.log(`JavaScript provides a ${color} collection of tools - including ${adjective} syntax and ${pluralNoun} - that allows ${name} to ${verb} with strongd`);