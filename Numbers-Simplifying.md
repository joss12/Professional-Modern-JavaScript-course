```javascript

console.log('cat' && 'dog'); //dog
console.log('cat' || 'dog'); //cat

let a = 10;
a++;
console.log(a);//11
a++;
console.log(a);//12

a = 8;
let result1 = a++ > 10;
console.log(result1, a); //false 9

let result2 = ++a > 10;
console.log(result2, a); //false 10

console.log(++a); //11
console.log(a++); //11 
console.log(a);//12


console.log('================');
console.log(--a);
console.log(a--);
console.log(a);

let a = 10;
let b = 0; //undefined;
 
b+= a; //b = 0 + 10;
console.log(b);

let a = 10, b = 5, c = 2;
result = a + b - c;
console.log(result)

b = 5;
b -= a;
console.log(b)
console.log(b *=5);
console.log(b %= 5);
console.log((b %=5) == 0);
console.log((b %=5) === 0)

const leet = 1337;
const yummy = 3.14;
const loss = -100;

console.group(1337 === 1337.00); // true

{
    let million = 1_000_000;
    console.log(million === 1000000); //true
}
{
    let million = 1e6;
    console.log(million === 1000000); //true
}

console.log(1e6 === 0.000001); //true
console.log(typeof leet); /// 'number'


{
    let addition = 123;
    addition += 1
    console.log(addition); //124
}

let addition = 123;
addition += 1;
console.log(addition); //124


console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991`

console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 - Correct (but ambiguous)
console.log(Number.MAX_SAFE_INTEGER  +2); // 9007199254740992 - Correct

//safe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));//true


//unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));//false
console.log(Number.isSafeInteger(9007199254740991));//true


 
console.log(10 ** 1000); //Infinity
console.log(-1 * 10 ** 1000); // -Infinity

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

console.log(Infinity === Infinity); // true
console.log(-Infinity === -Infinity); // true


console.log(Infinity > 1); //true
console.log(-Infinity < -1); //true

console.log(Number.POSITIVE_INFINITY === Infinity); // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); //true


const meaningOfLife = 42;
console.log(meaningOfLife.toString()); // 42

const message = "The meaning of life is: " + 42;
console.log(meaningOfLife); // The meaning of life is: 42;

const change = 123.353;
console.log(change.toString()); // '123.353

console.log(change.toFixed(2)); // '123.35' - rounded down
console.log(change.toFixed(1)); // '123.35' - rounded up

console.log(meaningOfLife.toFixed(2)); // '42.00'


const meaningOfLife = '42';

console.log(parseInt(meaningOfLife));

const change = '23.55';

 console.log(parseInt(change)); // 23
 console.log(parseFloat(change)); // 23.55
 console.log(+change); // 23.55


 const powerPuff = 'Sugar, spice and everything nice';

const valueOfPower = parseInt(powerPuff);
console.log(valueOfPower); //NaN

console.log(0 /0); //NaN

const first = parseInt('Alpha'); //NaN
const second = parseInt('Beta'); // NaN

console.log(first !== second); // true

console.log(NaN !== NaN) // false
console.log(NaN === NaN) // true

console.log(first === NaN); /// false

console.log(isNaN(NaN)); // true
console.log(isNaN(first)); // true