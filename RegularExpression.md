```javascript
/***
 * resources: https://regex101.com/, https://regexr.com/
*/
#Regular Expression
//1
const abcdef = new RegExp('abcdef');
const regexp = /abcdef/;
console.log(abcdef instanceof RegExp); // true
console.log(regexp instanceof RegExp); //true

console.log(regexp.toString() === '/abcdef/'); //true

console.log(regexp.source === 'abcdef'); //true

console.log(regexp.test('abcdef')); //true
console.log(regexp.test('ABCDEF')); //true
console.log(regexp.test('start abcdef end')); //true

//2
console.log(/abc/.test('abc')); //true
console.log(/abc/.test('1abc1')); //true

console.log('abc'.search(/abc/)); // 0
console.log('_abc'.search(/abc/)); // 1
console.log('xvz'.search(/abc/)); // -1

console.log('abc'.match(/foo/)); //null
const match = 'games football shoot the ball'.match(/foo/i);
console.log(match[0]); //'Foo'
console.log(match.index); // 6

console.log([...'abc'.matchAll(/foo/g)]); // []

const matchAll = 'games football shoot the ball'.matchAll(/foo/ig);
for( const match of matchAll){
     console.log(match[0]); // 'Foo', 'foo
     console.log(match.index); //6, 15
}


console.log('abcabc'.replace(/a/i, 'A')); //Abcabc
console.log('abcabc'.replace(/a/gi, 'A')); //Abcabc

console.log('eddy'.split(/a/i)); // [ 'eddymouity' ]