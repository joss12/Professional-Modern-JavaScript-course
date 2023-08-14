```javascript

#BigInt
//1
const bigInt = 1000000000000n;
console.log(typeof bigInt); // bigInt
console.log(-100n); //-100n

console.log(10 * 500); //Infinity

console.log(10n ** 500n); 
console.log(99999999999999);
console.log(99999999999999n);
console.log(BigInt('99999999'));

const parsed = BigInt('100'); // 100n
console.log(parsed === 10n); // true'
console.log(BigInt('0x64') === 100n); // true

//2
console.log(Number(100n) === 100);
console.log(BigInt(100) === 100n);

try {
    BigInt(100.5);
} catch (error) {
    console.log(error.message);
    // The number 100.5 cannot be converted to a BigInt because it is not an integer
}

console.log(Number(10n ** 500n)); //Infinity
console.log(Number(9007199254740993n)); //9007199254740993

try {
    console.log(10 + 20n);
} catch (error) {
    console.log(error.message);
    // Cannot mix BigInt and other types, use explicit conversions
}
console.log(10 + Number(20n));


//3
console.log(Number.MAX_SAFE_INTEGER + 1); //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); //9007199254740992n

const completelySafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(completelySafe + 1n); //9007199254740992n
console.log(completelySafe + 2n);  //9007199254740993n

console.log(20n * 2n); //40n
console.log(100n - 1n); //99n
console.log(100n ** 1000n); //1000000000........000000n
console.log(3n % 2n); //1n
console.log( 3n / 2n); //1n

//3.1
console.log(50n === 50n); //true
console.log(1n < 2n); //true
console.log(2n > 1n); //true
console.log(1n >= 1n); //true
console.log(1n <= 1n); //true