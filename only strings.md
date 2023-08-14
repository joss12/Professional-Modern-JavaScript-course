
 # String Master Class
 

```javascript

var num;
console.log(num); //undefined
var num2 = 0;
num = 10;


var num = 'str';
console.log(num); // str

let num;
console.log(num); //undefined
let str = 'str';
console.log(num); //undefined



let num2 = 10;
console.log(num2); //10
num2 = 'hello';
console.log(num2); //hello

a = 20;
console.log(a); //20

const username = 'kim';
num2 = '20';
username = 'Eddy' 
console.log(username); //TypeError: Assignment to constant variable

// string example
let name = ' Eddy';
const greating = "Hello";
console.log(greating + name); //Hello Eddy

const name = 'Eddy';
const name1 = "Grace";
const result = `The names are ${name} and ${name1}`
console.log(result); //The names are Eddy and Grace
// Backticks are generally used when you need to 
// include variables or expressions into a string.

// Number
const number1 = 3/0; //infinity

const number2 = -3/0; //-Infinity
console.log(number2);

//string can't be divided by numbers
const number3 = 'abc'/3;
console.log(number3); //NaN



console.log('Hello from String'); // Hello from String
console.log("Hello from String"); // Hello from String
console.log("Hello from 'String'"); // Hello from String
console.log('Hello from "String"'); // Hello from String
console.log('\'Hello from\' "String"'); // Hello from String
console.log("'Hello from'\"String\""); // Hello from String


console.log('\\'); // \
console.log('\u{1f339}'); // \u{1f339}
console.log('Hi\tJohn'); // Hi John

let person = 'Mr John Doe';
console.log(person); // Mr Json Doe
console.log(person.toUpperCase()); // Mr JOHN DOE
console.log(person.toLowerCase()); // mr john doe


console.log(person);

console.log(person[0]); // Mr
console.log(person[1]); // J
console.log(person[100]); // undefined


 console.log(typeof person); //string
 console.log(person.length); // number 

//  Template String

console.log(`Hello World!`); // Hello world!
console.log(`'Hello "World" !`); // 'Hello "World"!'
console.log(`'Hello', "World" \`!\``); // 'Hello', "World" \`!\``

//Line 1
// line 2

const traditional = 'Line 1 \n\' line 2';

console.log(traditional);

const modern = `Line 1 Line 2`;
console.log(modern);

const title = 'Mr';
const person = 'Eddy';
console.log(title + ' ' + person); //Mr Eddy
console.log(`${title} ${person}`);// Mr Eddy

const itemCount = 11;
console.log(`Total count: ${itemCount}`);

//Replace values

const dogs = 'The quick brown fox jumped over the lazy dog. The dog was on break.'

console.log(dogs.replace('dog', 'hound'));

console.log(dogs.replaceAll('dog', 'hound'));


//Repeat
const VIN_DIESEL = 'X'.repeat(3);
 console.log(VIN_DIESEL);

 const GOOGLE = `1${'0'.repeat(100)}`;
 console.log(GOOGLE);

 const echo = 'echo'.repeat(52);
 console.log(echo);


//Includes
const sentence = 'The quick brown fox jumped over the lazy dog.';
console.log(sentence.includes('fox'));
console.log(sentence.startsWith('The'));
console.log(sentence.endsWith('dog'));
console.log(sentence.endsWith('Dog'));


//Index Of
const message = "Brave, Brave new world";
console.log(message.indexOf("Brave")); // 0
console.log(message.lastIndexOf("Brave")); // 7

// -1 if not found
console.log(message.indexOf("Gabon")) // -1

//case sensitive
console.log(message.indexOf("brave")) // -1

//Formatting a string

const first = 'HeartBreaking';
const second = 'Hotel'

console.log(first);
console.log(second);

console.log(first);
console.log(second.padStart(first.length));

console.log(first + 'hotel');
console.log(second.padEnd(first.length) + 'hotel');


//Substring
const message = 'Hello World!'
//Everything after Hello
console.log(message.substring('Hello'.length)); // 'World

//Everything before world
console.log(message.substring(0, message.indexOf('World'))); // Hello