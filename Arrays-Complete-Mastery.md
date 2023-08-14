```javascript


#Arrays methods and functions

#The Push method adds an element to an array:
//1
const item = ['first', 'second'];
item.push('third');
console.log(item); // 'first', 'second', 'third'

//2
const animals = ['cat', 'dog', 'bird'];
const count = animals.push('deer');
console.log(count); //4

//3
const vegetables = ["parsnip", "potato"];
const moreVegs = ['celery', 'beetroot'];
vegetables.push(...moreVegs);
console.log(vegetables);


#The pop() method removes the last element from an array:
//1
const fruits = ["banana", "Orange", "apple",];
fruits.pop()
console.log(fruits);

//2
const names = ['John', 'Jane', 'Mary'];
console.log(names.pop()); //Mary

//3
const names = ['John', 'Jane', 'Mary', 'Mike'];
const lastNameWillBeRemoved = names.pop();
console.log(lastNameWillBeRemoved); //Mike
console.log(names.length);


#Array.unshift()
/**
 * The unshift() method adds one or more elements to the beginning of an array.
 * and returns the new length of the array.
 */

 //1
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // 5
console.log(array1); //[ 4, 5, 1, 2, 3 ]

//2
function func(){
    let array = ["GFG", "Geeks", "For", "Geeks"];
    let value = array.unshift("GeeksForGeeks");
    console.log(value);
    console.log(array);
}
func(); // [ 'GeeksForGeeks', 'GFG', 'Geeks', 'For', 'Geeks' ]

//3
let items = ['economy', 'deal'];
//Push to the start of the array
items.unshift('business');
items.unshift('vip');
console.log(items); // [ 'business', 'vip', 'economy', 'deal' ]

#Array.shift()
/**
 * The shift method removes the first element of an array and returns that element.
 * This method changes the length of the array.
 */

//1
const array1 = [1,2,3];
const firstElement = array1.shift();
console.log(array1);//[2,3]
console.log(firstElement);// 1

//2
const array1 = [1, 2, 3];
const firstElement = array1.shift()
console.log(array1)


#Destructuring Array
/**
 * The destructuring assignment syntax is a JavaScript 
 * expression that makes it possible to unpack values from arrays, 
 * or properties from objects, into distinct variables.
 */

//1
function calculateFood(food, tip){
    tip_percent = tip / 100;
    tip_amount = food * tip_percent;
    total = food + tip_amount;
    return [tip_amount, total];
}

const [tip, sum] = calculateFood(100, 20);
console.log(tip);
console.log(sum);

//2
const foo = ['one', 'two','three'];
const [red, yellow, blue] = foo;
console.log(red);
console.log(yellow);
console.log(blue);


/**
 * The spread operator allows you to spread an iterable 
 * collection (object or array) into another collection. 
 * Using this operator on arrays, you can merge the contents of arrays together.
 */

#Merge Arrays in JavaScript – Array Concatenation in JS

//1
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//2
#Array.concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merge = arr1.concat(arr2);
console.log(merge);

//3
const arr1 = [1,2,3];
const arr2 = [4,5,6];

for(let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
}
console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]

//4
const arr1 = [1,2,3];
const arr2 = [4,5,6];
arr1.push(...arr2);
console.log(arr1);

//5
const whiteMinerals = ["Sliver", "Platinum"];
const yellowMinerals = ['Cold', 'Copper'];

const combined = [...whiteMinerals, ...yellowMinerals];
console.log(combined);


let whiteMinerals = ['Silver', 'Gold'];
let yellowMinerals = ['Gold', 'Copper'];

let combined = [...whiteMinerals,...yellowMinerals];
console.log(combined); // ['Silver', 'Gold', 'Copper']


let whiteMinerals = ['Silver', 'Gold'];
let yellowMinerals = ['Gold', 'Copper'];

let combined = [...whiteMinerals,...yellowMinerals];
console.log(combined); // ['Silver', 'Gold', 'Copper']


let withIron = [...whiteMinerals, 'Iron'];
withIron = ["Iron", ...whiteMinerals];

console.log(withIron); ['Iron', 'Silver', 'Gold' ]


// #Foreach method

/**
 * The arr.forEach() method calls the provided function once for each element of the array. 
 * The provided function may perform any kind of operation on the elements of the given array. 
 */


//1
const numbers = [1,2,3,4,5]
numbers.forEach(consoleItem);
function consoleItem(item, index, arr){
    console.log('a[', + index + '] = ' + item);
}
consoleItem();

//2 with arrow  function
const numbers = [1,2,3,4,5]
numbers.forEach((item, index, arr)=>{
    console.log('a[' + index + '] ='+ item)
});

//calculating the som an array
//3
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((item, index, arr)=>{
    sum += item;
});
console.log(sum); //15

/**
 * The code behind the scene is as follows:
 */
// 1 + 2 = 3;
//3 + 3 = 6;
// 6 + 4 = 10;
// 10 + 5 = 15;


//how many times a letter appears in an array
//4
const letter = ['a','b','a','b','c','d','a'];
let count = {};
letter.forEach((item)=>{
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count); //{ a: 3, b: 2, c: 1, d: 1 }

//5
const users = [
    {
        id:1,
        name: "Eddy",
        isActive: true
    },
    {
        id:2,
        name: "Jane",
        isActive: false
    },
    {
        id:3,
        name: "John",
        isActive: true
    }
];

const names = [];
users.forEach(user=>{
    names.push(user.name);
});
console.log(names);

//6 
let products = [
    {name: 'Apple', price: 100},
    {name: 'Orange', price: 200},
    {name: 'Banana', price: 300},
    {name: 'Mango', price: 400},
    {name: 'Pineapple', price: 500}
 ];

 //log all the prices
 products.forEach(function(product) {
    console.log(product.price);
 });

  //log as an indexed list
 products.forEach((product, index)=>{
    console.log(index + ':' + product.name); 
    // {0: 'Apple', 1: 'Orange', 2: 'Banana', 3:Mango, 4: 'Pineapple'}
 });


#Map method

/**
 *The map() method creates a new array populated with the results of calling a provided
 * function on every element in the calling array. 
 */ 

//1
 const user = [
    {
        id:1,
        name: 'Eddy',
        isActive: true,
    },
    {
        id:2,
        name: 'Jane',
        isActive: false,
    },
    {
        id:3,
        name: 'Mike',
        isActive: true,
    }
 ]
 const names = [];

 user.map((user)=>(
    names.push(user.name)
 ));
 console.log(names);

 //multiply an array of numbers
//2
const numbers = [1,2,3,4,5];
const numberDouble = numbers.map(double);

function double(value, index, arr){
    return value * 2
}
console.log(numberDouble); //[ 2, 4, 6, 8, 10 ]
//3
const numbers = [1, 2, 3, 4, 5];
const numberDouble = numbers.map(multiply);
function multiply(value, index, arr){
    return value * 2;
}
console.log(numberDouble);

//4
const people = [
    {firstName: 'Eddy', lastName: 'Mouity'},
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'Pens', lastName: 'Mike'},
]

const peopleWithFullName = people.map(person =>{
    return{
        ...person,
        fullName: `${person.firstName} ${person.lastName}`
    }
});

console.log(peopleWithFullName);

//5
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'laptop',
        price: 1500,
        count: 2
    },
    {
        name: 'laptop',
        price: 500,
        count: 10
    }
]

const totalProductsValue = products.map(item => item.price * item.count)
console.log(totalProductsValue);

//Add numbers to the array
const numbers = [1,2,3,4,5];
const numbersAdd = numbers.map(addition);

function addition(value, index, arr){
    return value + index;
}
console.log(numbersAdd);

//Converting array of string to array of number
const str = ['1', '2', '3', '4', '5'];
const numbers = str.map(Number);
console.log(numbers);


#Array.filter(iterator)
/**
 * The filter() method creates a new array filled with element that pass a 
 * test implemented by the provided iterator function.
 * The method does not execute the function for empty elements.
 * The method does not change the original array.
 */

//1
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(isEven);

function isEven(value){
    return value % 2 === 0
}
console.log(even);


/**
 * Filtering the name and ages of the people.
 */
//2
const people = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Jane Doe',
        age: 15
    },
    {
        name: 'Mary Doe',
        age: 50
    },
    {
        name: 'Peter Doe',
        age: 20
    }
]

const adults = people.filter(person => person.age >=20);
console.log(adults);
//filtering duplicate number in the array
const numbers = [1,2,3,4,2,4,3,1,3,4, 6,7,8,9,10];
const num = numbers.filter((value, index, arr)=>{
    return arr.indexOf(value) === index;
});
console.log(num);

//get the evens and the odds
const numbers = [1773, 19, 50, 14, 59];
const evens = numbers.filter(item => item % 2 === 0);
const odds = numbers.filter(item => item % 2 !== 0);

console.log(evens);
console.log(odds);

#Array.slice()
/***
 * The slice() method returns a shallow copy of a portion of an array
 * into a new array object.
 */
//1
let numbers = [2,3,5,7,11,13,17];
let newArray = numbers.slice(3, 6);
console.log(newArray);

//2
const names = ["Eddy", "Larry", "Curly", "Moe"];
const new_arr = names.slice();
console.log(new_arr); //[ 'Eddy', 'Larry', 'Curly', 'Moe' ]

const new_arr1 = names.slice(2);
console.log(new_arr1); //['Curly', 'Moe' ]

const new_arr2 = names.slice(1, 4);
console.log(new_arr2); //[ 'Larry', 'Curly', 'Moe' ]

//3
//slice() With Negative index
const names = ['Mango', 'Poly', 'Ajax', 'Lux'];
 const new_arr = names.slice(0, -1);
 console.log(new_arr); //[ 'Mango', 'Poly', 'Ajax' ]

 const new_arr1 = names.slice(-3);
 console.log(new_arr1); //['Poly', 'Ajax', 'Lux']


//slice() with Objects as Array Elements
const users = {
    name: 'John',
    age: 30
}

let arr = [users, "Gabon", "Developer"];
let new_arr = arr.slice();
console.log(arr[0]);
new_arr[0].name = "Joss";
console.log(arr[0]);

//2
let products = [
    {name: 'Appel', price: 50},
    {name: 'Banana', price: 150},
    {name: 'Melon', price: 200},
    {name: 'Saffron', price: 2000},
];

const isExpensive = (product) => product.price > 1000;

const isSomeProductExpensive = products.some(isExpensive);
console.log(isSomeProductExpensive); //true

const isEveryProductExpensive = products.every(isExpensive);
console.log(isEveryProductExpensive);

const isSomeProductCheap = products.some(product => product.price < 100); //false


#Array.reduce()
/*The reduce() method executes a reducer function on each
*element of the array and returns a single output value. 
*/

//1
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((accumulator, current)=> accumulator + current, 0);
console.log(result);

//2
function reduce(arr, combine, start){
    let current = start;
    for(let element of arr){
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1,2,3,4], (a,b)=> a+b, 0)); //->10
//3
const numbers = [1, 2, 3, 4, 5, 6, 7];
const total = numbers.reduce(sum, 0)

function sum(accumulator, value){
    return accumulator + value;
}
console.log(total) //28

//4
const numbers = [1, 2, 3, 4, 5, 6, 7];
const max = numbers.reduce(callBack, -Infinity);
function callBack(accumulator, value){
    if(accumulator > value){
        return accumulator;
    }else{
        return value;
    }
}
console.log(max);

#Array.reverse()
/**
 * The reverse() method reverses the order  of the elements in an array.
 * The reverse() method overwrite the original array.
 */
//1
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.reverse();
console.log(fruits);
//2
const arr = [34, 234, 567, 4];
console.log(arr); //[ 34, 234, 567, 4 ]
const new_arr = arr.reverse();
console.log(new_arr); //[ 4, 567, 34, 234 ]
//3
const better = ['alpha', 'beta', 'gamma'];
const reversedCopy = [...better].reverse();
console.log(reversedCopy);

#Array.sort();
/**
 * The sort() method sorts an array alphabetically:
 */
//1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
//2
array = [1, 3, 22];
array.sort();
console.log(array);