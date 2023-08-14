```javascript


function calDiscountValue(value, percDiscount){
    // const result = value * (100 - percDiscount) / 100;
    const result  = value - (value * percDiscount / 100);
    return result;
}
// console.log(calDsicountValue(100, 50));

let discountValue;
discountValue = calDiscountValue(123, 10);
console.log(discountValue); // 110.7

discountValue = calDiscountValue(456,10);
console.log(discountValue); // 410.4



function calDiscountValue(value, percDiscount){
    // const result = value * (100 - percDiscount) / 100;
    const discountValue  = value - (value * percDiscount / 100);
    return discountValue;
}

console.log(calDiscountValue(50)); //NaN


#Closur functions
const sayHi = (person) =>{
    const fullName = `${person.firstName} ${person.lastName}`;
    console.log(`Hi ${fullName}`);
}

sayHi({
    firstName: 'Eddy',
        lastName: 'Mouity'
});

const result = sayHi({
    firstName: 'Eddy',
        lastName: 'Mouity'
});

console.log(result); //undefined

#Math functions
Math.max(4, 10, 20); // 20

const numbers = [4, 10, 20];

Math.max(numbers[0], numbers[1], numbers[2]); // 20

Math.max(...numbers); // Same as `Math.max(4, 10, 20)` => 20

function example (a, b){
    console.log(`a: ${a}, b: ${b}`);
}

const message = ['Hello', 'World'];
console.log(...message);

#CallBack function
function runTwice(callback){
    callback();
    callback();
}

runTwice(function(){
    console.log('I ran twice Eddy');
});


setTimeout(function(){
    console.log('A second has passed')
}, 1000);

setTimeout(function() {
    console.log('A second has passed')
}, 2000);



#Function exression


let sum;

sum = function(a, b){
    return a + b;
    a = 10;
    b = 20;
}
console.log(sum(10, 20));
/*--------------------------*/
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;     
    }
    return result;
};
console.log(power(2, 10));
/*--------------------------*/
const prefixedLog = (prefix, ...rest) =>{
    console.log('~~' + prefix + '--');
    console.log(...rest);
}
prefixedLog('coming', 'hello', 'eddy');

#In JavaScript arguments are always passed by values

function tryToReassignPrimitive(input){
    input = 4;
}

let primitive = 3;
tryToReassignPrimitive(primitive);
console.log(primitive); //3

function tryToReassignPrimitive(input){
    input = {name: 'Kim'}
}

let object = {name: 'John'};
tryToReassignPrimitive(object);
console.log(object); //{name: 'John'}


#Closures
//1
let alpha = 0;

function example(){
    alpha++;
}

example();
console.log(alpha);

//2
function counter(){
    let count = 0;
    return function(){
        return count++;
    };
}

const inc = counter();
console.log(inc()); //0 
console.log(inc()); //1 
console.log(inc()); //2 

//2
function human(){
    const name = 'Eddy';
    function sayHi(){
        console.log(`Hi, ${name}`);
    }
    sayHi();
}
human();


//3
function human(){
    const name = 'Eddy';
    function sayHi(){
        console.log(`Hi, ${name}`);
    }
    function sayHowYouFeel(){
        console.log(`How you feeling today?`);
    }
    sayHi();
    sayHowYouFeel()
}
human();


//4
function human(name){
    function sayHi(){
        console.log(`Hi, ${name}`);
    }
    function sayHowYouFeel(){
        console.log(`How you feeling today?`);
    }
    sayHi();
    sayHowYouFeel()
}
const eddy = human('Eddy');
const joss = human('Joss');

//5
function setupItem(){
    let myNumber = 1;
    function increment(){
        return console.log(myNumber++);
    }
    increment();
    increment();
    increment();
}

setupItem();


//6
#closures are also common inside the objects definition

function myOjb(){
    let myVal = 1;
    return{
        // returns 2 methods display and inc
        display: function(){
            return console.log(myVal);
        },
        inc: function(){
            return myVal++
        }
    }
}

//7

const myThing = myOjb();
myThing.display();
myThing.inc();
myThing.display();

function createCounter(initial = 0){
    let count = initial;
    return {
        increment: () => count++,
        decrement: () => count--,
        value: ()=> count,
        reset:(value) =>{
            return count = value;
        }
    }
}


const counter = createCounter();
console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.reset(10);
console.log(counter.value());


//8
let catDog;

catDog = {
    speak: function(){
        console.log('meow')
        console.log('woof')
    }
}

catDog = {
    speak(){
        console.log('meow');
        console.log('woof');
    }
}

catDog.speak();


/**
 * One thing to be very careful when using closures, it is
 * what happens inside loops. Actually this technique it's called a FUNCTION FACTORY.
 * Functions factory it's a technique when you create a loop to create a series of functions.
 */
//1
const me = {
    name: 'Eddy',
    talk(){
        return `Hi, my name is ${this.name} and I'm handsome`;
    }
}

console.log(me.talk())

//1.1 The Factory function itself basics
function personFactory(name){
    const object = {
        name,
        talk(){
            return `Hi, I'm ${this.name}!`
        }
    }
    return object;
}

const person = personFactory('Eddy');
console.log(person.talk());

//2
function createRanged({value, min, max}){
    return{
        get value(){
            return value;
        },
        set value(newValue){
            value = Math.max(min, Math.min(max, newValue));
        }
    }
}

const ranged = createRanged({value: 5, min:0, max:10});
console.log(ranged.value); // 5
ranged.value = 15;
console.log(ranged.value); // 10
