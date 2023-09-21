/*let num = 1001;
console.log(num.length);
console.log(String(num).length);

if (String(num).includes('')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }

let num2 = 123.45;
    
if (String(num2).includes('.')){
        console.log(String(num2).length-1);
        } else {
        console.log(String(num2).length);
        }

let num3 = 812.1994;

if (String(num3).includes('.')){
    console.log(String(num3).length-1);
    } else {
    console.log(String(num3).length);
    }

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";

console.log(dna.trim());
console.log(dna.toUpperCase());
console.log(dna.replace('GCT', 'AGG'));
        
if(dna.indexOf('cAt')){
console.log("cAt found");
} else {
    console.log("cAt NOT found");
}

console.log(dna.slice(16,19));

console.log(dna.length);

console.log(`The DNA strand is ${53} character long`);

console.log(`${dna.slice(18,20).toUpperCase()}o ${dna.slice(dna.indexOf('cAt'),dna.indexOf('cAt')+3).toLowerCase()}`);


let str = 'JavaScript'
console.log(str.slice(0,1) + str.slice(4,5));

console.log(str.replace('JavaScript', 'JS'));

let initial = 'JS';
console.log(`The abbreviation for ${str} is ${initial}`);

let language = 'English';
let shortL = 'Eng';
console.log(`The abbreviation for ${language} is ${shortL}`);
let name = 'title case';

console.log(name.replace('title case', 'Title Case'));

let practiceFile = ['273.15'];

practiceFile.push("42", "hello");
console.log(practiceFile);

practiceFile.push(false, -4.6, "87");
console.log(practiceFile);

let cargoHold = [ "oxygen tanks", "space suits", "parrot", "instruction manual", "meal packs", "slinky",
"security blanket"];

cargoHold.splice(5, 0, 'space tether');

 console.log(cargoHold);

cargoHold.pop(6, 0);
console.log(cargoHold);

cargoHold.shift(0,0);
console.log(cargoHold);

cargoHold.unshift('1138');
console.log(cargoHold);

cargoHold.push('20 meters');
console.log(cargoHold);

console.log(`The array ${cargoHold} has a length of ${cargoHold.length}).`);

cargoHold.splice(3, 0, 'keys');
console.log(cargoHold);

cargoHold.splice(4, 1);
console.log(cargoHold);

cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold);

let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];

let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsniip'];

let holdCabinet3 = holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet3);

console.log(holdCabinet1.slice(2));
console.log(holdCabinet2.slice(2));

holdCabinet1.reverse();
console.log(holdCabinet1);

holdCabinet2.sort();
console.log(holdCabinet2);


let str = 'In space, no one can hear you code.'

str.split();
console.log(str);

str.split('e');
console.log(str);

str.split(' ');
console.log(str);

str.split('');
console.log(str);

let arr = ['B', 'n', 'n', 5];

arr.join();
console.log(arr);

arr.join('a')
console.log(arr);

arr.join(' ')
console.log(arr);

arr.join('');
console.log(arr);

console.log(str.split(',').sort().join(','));
*/
let element1 = ['hydrogen', 'H', 1.008];
element2 = ['helium', 'He', 4.003];
element26 = ['iron', 'Fe', 55.85];

let table = [];

table.push(element1);
table.push(element2);
table.push(element26);


console.log(table[1], table[1][1]);
