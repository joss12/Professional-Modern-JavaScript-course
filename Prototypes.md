```javascript

//1
const alpha = {
    name: 'Eddy',
}

console.log(typeof alpha.name); //string
console.log(typeof alpha.toString); //function
console.log(typeof alpha.__proto__); //object
console.log(typeof alpha.__proto__.toString); // function

//1.1
const alpha = {
    name: 'Eddy',
}

console.log(typeof alpha.name); //string
console.log(typeof alpha.toString); //function
console.log(typeof alpha.__proto__); //object
console.log(typeof alpha.__proto__.toString); // function

const beta ={
     age: 42,
     __proto__:alpha,
};

console.log(beta.age); //42
console.log(beta.name); // Eddy

//2
const person = {
    __proto__:{
        __proto__:{
            __proto__:{
                name: 'Eddy',
                age: 34,
            },
        },
    },
};

console.log(person.name);
console.log(person.age);
console.log(person.weight);
console.log(person.__proto__.__proto__.__proto__.__proto__.__proto__);


//3
class Alpha {log() {console.log('bonjour'); }}
console.log(typeof Alpha); //function
console.log(typeof Alpha.prototype); //object
console.log(typeof Alpha.prototype.log); //function


function Beta(){}

console.log(typeof Beta); //function
console.log(typeof Beta.prototype); // object
Beta.prototype.log = function(){console.log('Bonjour')}

//4
let created;
class NewEffects{
    constructor(message){
        this.message = message;
        created = this;
    }
    log() {console.log(this.message);}
}

const instance = new NewEffects('Bonjour');
console.log( instance === created); //true
console.log(Object.keys(instance)); //[message]
console.log(typeof instance.log) //function
console.log(instance, NewEffects.prototype.log); //function
console.log(instance.__proto__ === NewEffects.prototype); //true
console.log(typeof instance.__proto__.log); //function

//5
function Func(){}
const func = new Func();
console.log(func._proto__ = Func.prototype); // true

class Cls{}
const cls = new Cls();
console.log(cls._proto__ = Cls.prototype); // true

const str = 'abc';
console.log(str.__proto__ === String.prototype);

const num = 123.4;
console.log(num.__proto__ === Number.prototype); //true


console.log(typeof Number.prototype.toPrecision); //function
console.log(typeof num.__proto__.toPrecision); // function
console.log(num.toPrecision(3));

//6
String.prototype.upperCaseTrim = function(){
    return this.toUpperCase().trim();
};

console.log(''.__proto__ === String.prototype); //true
console.log(''.__proto__.upperCaseTrim === String.prototype.upperCaseTrim); //true
console.log('Hello world!'.upperCaseTrim()); //HELLO WORLD

function upperCaseTrim(value){
    return value.toUpperCase().trim();
}

console.log(upperCaseTrim('hello world')); //HELLO WORLD

//7
class Animal{
    eat(){return 'yum yum';}
}

class Bird extends Animal{
    fly(){return 'flap flap'}
}


const bird = new Bird();

console.log(bird.__proto__ === Bird.prototype); //true
console.log(bird.__proto__.fly === Bird.prototype.fly); //false
console.log(bird.fly()); // flap flap

console.log(Bird.prototype.__proto__ === Animal.prototype); //true
console.log(bird.__proto__.__proto__ === Animal.prototype); //true
console.log(bird.__proto__.__proto__.eat === Animal.prototype.eat); //true

console.log(bird.eat()); // yum yum

//8
let animal ={
    eat: function(){
        return 'yummy yummy';
    }
}

let bird = {
    __proto__: animal,
    fly: function(){
        return 'flap flap'
    }
}
console.log(bird.fly());
console.log(bird.eat());

bird = Object.create(animal);
bird.fly = function(){return 'flap flap'};

//9
let dictionary = {};
dictionary['Eddy'] = true;
dictionary['John'] = false;

console.log(dictionary.__proto__ === Object.prototype); //true
console.log(Object.prototype.toString); // function
console.log('toString' in dictionary); //true
if(dictionary['toString']){console.log('toString went to the party')};
dictionary = Object.create(null);

//10
let dictionary = {};
dictionary['eddy'] = true;
dictionary['john'] = false;

console.log(dictionary.__proto__ === Object.prototype); //true
console.log(Object.prototype.toString); // function
console.log('toString' in dictionary); //true
if(dictionary['toString']){console.log('toString went to the party')};

dictionary = Object.create(null);
console.log('__proto__' in dictionary); //false
dictionary['eddy'] = true;
dictionary['john'] = false;
console.log('eddy' in dictionary); //true
console.log('john' in dictionary); //false
console.log('toString' in dictionary); //false
