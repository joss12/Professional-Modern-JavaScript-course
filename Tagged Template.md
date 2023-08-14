```javascript

//1
const person = 'Eddy';
const age = 29;

const simple = `Person: ${person}, Age: ${age}.`;
console.log(simple); //Person: Mike, Age:29

const tagged = format`Person: ${person}, Age: ${age}.`;

function format(strings, ...expressions){
    console.log(strings); //[ 'Person: ', ', Age: ', '.' ]
    console.log(expressions); //[ 'Eddy', 29 ]
}

//2
let x = 10, y = 20, z = 30;

const debug = (strs, ...exps)=>{
    console.log(strs, ...exps);
}

debug`${x}${y}${z}`

//3
let x = 10, y = 20, z = 30;

const debug = (strs, ...exps)=>{
    console.log(strs, ...exps);
}

debug`${x}${y}${z}`// [ '', '', '', '' ] 10 20 30

debug`${x}`; //[ '', '' ] 10

debug`${x + y + z}`; //[ '', '' ] 60

//4
function interpolate(strs, ...exps){
    return strs.reduce(
        (result, str, i)=>{
            const exp = (i < exps.length) ? exps[i] : '';
            return result + str + exp;
        },
        ''
    )
};

let pineapple = 'pineapple';
let capsuim = 'capsuim';
console.log(`I like ${pineapple} and ${capsuim} on pizza`);
console.log(interpolate `I like ${pineapple} and ${capsuim} on pizza`);

//4

function calculate(strs, ...exps){
    const math = strs.reduce((acc, str, i)=>{
        return acc + str.replaceAll('^', '**') + (exps[i] ?? '')
    }, '');

    return eval(math);
}

const a = 2;
const b = 4;
console.log(calculate`${a} ^ ${b}`);