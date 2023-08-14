```Javascript

/**
   Deep dive into Boolean
 * Boolean always return true or false
 */

   const Yes = true;
   const No = false;
   
   let person = 'eddy';
   console.log(person === 'eddy'); //true
   console.log(person === 'Eddy'); //true
   


let person = 'Eddy';
if(person === 'Eddy'){
    console.log('Hi E')
}

if(person === 'Joss'){
    console.log('Hi J!')
}

console.log(!true); //false
console.log(!false); //true


console.log(!!true); //true
console.log(!!false); //false

console.log(!!''); //false
console.log(!!'Hello world'); //true


let state = 'Pending';
if(state === 'Pending') {
    console.log('Valid');
}else if(state === 'Done'){
    console.log('Valid');
}else{
    console.log('Unexpected state !')
}

if(state === 'Pending' || state === 'Done') {
    console.log('Valid');
}else{
    console.log('unexpected status')
}


 let httpCode = 200;

 if(httpCode === 200){
    console.log('Success');
 }else if(httpCode >= 400 && httpCode < 500){
    console.log('Error');
 }else{
    console.log('Unexpected error')
 }

//How to write variables
let userLoggedIn; // false
let isUserLoggedIn; //true

let access; // false
let hasAccess; // true

let dance; //false
let canDance; //true

let provideAddress; //false
let shouldProvideAddress; //true
