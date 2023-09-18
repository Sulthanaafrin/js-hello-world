let num = 1001;
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


