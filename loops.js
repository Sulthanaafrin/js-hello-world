
for (let i = 0; i <= 20; i++){
   console.log(i);
}

for (let i = 3; i < 29; i = i + 2) {
   console.log(i);
}

for (let i = 12; i >= -14; i -= 2) {
   console.log(i);
}

for (let i = 50; i >= 20; i--) {
   console.log(i);
}

let array = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < array.length; i++){
   console.log(array[i]);
}

let name1 = 'LaunchCode';

for (let i = name1.length -1; i >= 0; i = i - 1){
   console.log(name1[i]);
}

let array1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

for (let i = 0; i <= array1.length -1; i++) {
   if (i === 0) {
           console.log(array1[i] +  " is even");
   }
   else if (i % 2 === 0) {
           console.log(array1[i] + " is even");   
   }
   else {
           console.log(array1[i] + " is odd");
   }
}

const input = require('readline-sync');

let fuelLevel = 0;
let astronautsAbroad = 0;
let altitude = 0;

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
   fuelLevel = input.question("Enter the starting fuel level: ");
}

while (astronautsAbroad <=0 || astronautsAbroad > 7) {
   astronautsAbroad = input.question('Enter the no of astronauts abroad: ');
}
while (fuelLevel - 100 * astronautsAbroad >= 0) {
   altitude +=50;
   fuelLevel -= 100 * astronautsAbroad;
}

if (altitude <= 2000){
   console.log("Orbit Achieved");
} else {
   console.log("Failed to reach Orbit");
}

console.log(`The shuttle gained an altitude of ${altitude} km`)
