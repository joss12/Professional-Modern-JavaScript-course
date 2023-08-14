```javascript

//1
const numbers = new Set();
numbers.add(5);
numbers.add(1);
numbers.add(5);

const message = new Set(['bonjour', "Hello", "Hola"]);
console.log(message); //Set(3) { 'bonjour', 'Hello', 'Hola' }

const characters = new Set('bonjour');
console.log('characters', characters); //characters Set(6) { 'b', 'o', 'n', 'j', 'u', 'r' }

console.log(numbers instanceof Set); //true
console.log(message instanceof Set); //true
console.log(characters instanceof Set); //true


//2
const person = new Set(['John', 'Jane', 'Jack', ])

for(const people of person){
    console.log(person);
}

const personArray = [...person];
console.log(personArray);


//3
const person = new Set(['John', 'Jane', 'Jack', ])

for(const people of person){
    console.log(person); //Set(3) { 'John', 'Jane', 'Jack' }
}

const personArray = [...person];
console.log(personArray);//[ 'John', 'Jane', 'Jack' ]

const personCopy = new Set(person);
personCopy.add('Eddy');
console.log(personCopy); //Set(4) { 'John', 'Jane', 'Jack', 'Eddy' }
console.log(person); //Set(3) { 'John', 'Jane', 'Jack' }


//4
const orderOne = new Set(['Pizza', 'Burger', 'Salad',]);
const orderTwo = new Set(['Ice cream','Salad',]);

const orderOneArray = [...orderOne]; //
const orderTwoArray = [...orderTwo]; //


const missedCalls = ['Jane', 'John', 'Jack','Eddy'];
const uniqueMissedCalls = [...new Set(missedCalls)];

try {
    const result = [...orderOneArray,...orderTwoArray];
    console.log(result);
    console.log(uniqueMissedCalls);
} catch (error) {
    console.log('This is an error', error);
}

//5
const spices = new Set(['bissape', 'biscuit']);
spices.add('cumin'); 
spices.delete('biscuit');//true
spices.delete('biscuit'); //false


spices.has('cumin'); //true
spices.has('biscuit'); //false

console.log(spices); //Set(2) { 'bissape', 'cumin' }
console.log(spices.size) //2

spices.clear(); // Set{ 'bissape', 'biscuit' }
console.log(spices.size); // Set{ 'bissape', 'biscuit' }


//6
const count = 10_000;
const input = [...Array(count)].map(()=>
Math.floor(Math.random() * (count / 2))
)

console.time('array');
const array = [];
for(const item of input){
    if(array.indexOf(item) === -1){
        array.push(item)
    }
}

console.timeEnd('array');

console.time('set');
const set = [...new Set(input)];
console.timeEnd('set');

console.log({
    withArray: array.length,
    withSet: set.length
})


//7
const input = ['a', 'b', 'a', 'c'];
const removeDuplicates = (array) =>[...new Set(array)];
console.log(removeDuplicates(input)); // [ 'a', 'b', 'c' ]

const hasDuplicates = (array) => new Set(array).size !== array.length;
console.log(hasDuplicates(input)); // true

//8
const input = ['a', 'b', 'a', 'c'];
const removeDuplicates = (array) =>[...new Set(array)];
console.log(removeDuplicates(input)); // [ 'a', 'b', 'c' ]

const hasDuplicates = (array) => new Set(array).size !== array.length;
console.log(hasDuplicates(input)); // true

const findRepeatedItem = (array) =>{
    const seen = new Set();
    const repeated = new Set();
    for(const item of array){
        if(!seen.has(item)){
            seen.add(item);
        }else{
            repeated.add(item);
        }
    }
    return [...repeated]
}
console.log(findRepeatedItem(input)); // [ 'a', 'b', 'a', ']