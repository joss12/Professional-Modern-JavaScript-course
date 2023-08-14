```javascript

//1
function logPrice(fruit){
    switch(fruit){
        case 'apple':
            console.log('1.00');
            break;
        case 'banana':
            console.log('0.05');
            break;
        case 'orange':
            console.log('0.75');
        break;
        default:
    }
}
logPrice('apple');
logPrice('banana');
logPrice('orange');

//2
function sendToArk(animal){
    switch (animal){
        case 'dog':
            case 'cat':
                console.log('lower deck');
                break;

                case 'chicken':
                    case 'pigeon':
                        console.log('upper deck');
                    break;

                    default:
                        console.log('extinct');
    }
}
sendToArk('dog');
sendToArk('chicken');
sendToArk('dinosaur');

//3
let person = {
    name: 'John',
}

switch(person){
    case {name: 'John'}:
        console.log('Hi John! -- will not work');
        break;
}

switch(person.name){
    case 'John':
        console.log('Hi John');
        break;
}

//4
function tossResult(value){
    switch(value){
        case 0:
            return 'Head';
        case 1:
            return 'Tail';
    }
}

console.log(tossResult(0)); // Head
console.log(tossResult(1)); //Tail

//5
const action = 'Say_hello';

switch(action){
    //you can't declare a variable twice in the same scope
    case 'Say_hello':{
        let message = 'hello';
        console.log(message);
        break;
    }
        case 'say_hi':{
            let message = 'hi';
            console.log(message);
            break;
        }
            default:{
                console.log('Invalid action received.');
                break;
            }
}

//6
function officeHours(day){
    switch(day){
        case 'Monday':
            return '9:00 - 17:00';
        case 'Tuesday':
            return '10:00 - 17:00';
        case 'Wednesday':
            return '11:00 - 17:00';
        case 'Thursday':
            return '11:00 - 16:00';
        case 'Friday':
            return '12:00 - 15:00';
        default:
            return 'Closed'
    }
}

console.log(officeHours('Monday')); // 11:00 - 16:00
console.log(officeHours('Sunday')); // Closed

//7
function officeHours(day){
    return({
        Monday: '9:00 - 17:00',
        Tuesday: '10:00 - 17:00',
        Wednesday: '11:00 - 17:00',
        Thursday: '11:00 - 16:00',
        Friday: '11:00 - 15:00'
    })[day] ?? 'Closed'
}

console.log(officeHours('Thursday')); // 11:00 - 16:00
console.log(officeHours('Friday')); //Closed
