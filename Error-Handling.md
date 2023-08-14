````javascript

const basics = new Error('Something bad happened');
console.log(basics.message); // "Something bad happened"
console.log(basics.stack); // "Error: Something bad happened"

//2
const rangeError = new RangeError('Wrong number');
console.log(rangeError instanceof RangeError); //true
console.log(rangeError instanceof Error); //true

console.log(basics instanceof RangeError); //false
console.log(basics instanceof Error); //true

console.log(rangeError.message); // ' Wrong number'
console.log(rangeError.stack); // Error;

//3
let person={
    name:"John"
}

console.log(person.name); //John
person = undefined;
console.log(person.name); //TypeError: Cannot read properties of undefined (reading 'name');

//4
try {
    fancyModern();
} catch (error) {
   //error
}
console.log('New coding dress');

//5
try {
    fancyModern();
} catch (error) {
   console.log('instance of error');
   console.log(error instanceof Error);
   console.log('---message---');
   console.log(error.message);
   console.log('----stack----');
   console.log(error.stack);
}
console.log('New coding dress');

//6
function sum(a, b){
    return a + b;
}
console.log(sum(1, '2')); 

//7
function sum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Parameters must be numbers');
    }
    return a + b;
}
console.log(sum(100, '100')); //Error: Parameters must be numbers

//8


function tantrum(){
    throw new Error('Javascript ErrorHandler');
}

function comeHere(){
    tantrum();
}

try {
    comeHere()
} catch (error) {
    console.log('Using the try catch', error.message); //Using the try catch Javascript ErrorHandler
}

//9
function bigBoy(){
    try {
        throw new Error('noooooooooo');
    } catch (error) {
        console.log('its okay')// its okay
    }
}
// bigBoy();

try {
    bigBoy();
} catch (error) {
    console.log(error.message); //its okay
}

//10

try {
    console.log('setup a db connection'); //setup a db connection
    console.log(' run a query'); //run a query
} catch (error) {
    console.log(error.message);
}finally{
    console.log('make sure the db connection is closed'); //make sure the db connection is closed
}

//11
try {
    console.log('setup a db connection'); //setup a db connection
    throw new Error('Failed to connect');//Error: Failed to connect
}finally{
    console.log('make sure the db connection is closed'); //make sure the db connection is closed
}
 //12
try{
    setTimeout(()=>{
        weExecuteTheMAtrix();
    }, 1000)
}catch(e){
    console.log('We have Neo');
}


//the correction 12.1
setTimeout(()=>{
try{
        weExecuteTheMAtrix();
    }catch(e){
        console.log('We have Neo');
    }
}, 1000);

//13
setTimeout(()=>{
    itsAllInYou();
    console.log('I don not exist')
}, 1000);

setTimeout(()=>{
    console.log('My own thing');
}, 2000)
