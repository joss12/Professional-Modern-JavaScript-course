```javascript

//1
function* simple(){
yield 1;
yield 2;
yield 3
}

const iterator = simple();
console.log(typeof iterator.next);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//2
function* simple(){
    console.log('starting');
    yield 1;
    console.log('resuming');
    yield 2;
    console.log('complete');
}

const result = simple();
console.log(result.next());

//3
function* range(start = 0, end = Infinity, step = 1){
    for(let i = start; i < end; i+= step){
        yield i;
    }
}

const iterator = range(0, 2);
console.log(iterator.next()); //{value: 0, done: false}
console.log(iterator.next()); //{value: 1, done: false}
console.log(iterator.next()); //{value: 2, done: false}


for(const value of  range(0, 2)){
    console.log(value);
}

const values = [...range(0, 2)];
console.log(values);

//4
class CancellationToken{
    isCancelled = false;
}

function* iterate(maxValue, token){
    let i = 1;
    while(i <= maxValue){
        yield i++;
        if(token.isCancelled){
            return;
        }
    }
}

 const token = new CancellationToken();
 for(const value of iterate(10, token)){
    if(value %5 === 0) token.isCancelled = true;
    console.log(value);
 }

 //5
function* simple(){
    yield 'a';
    yield 'b';
}
console.log([...simple()]); //['a', 'b']
const object = {
    *simple() { yield 'a'; yield 'b';}
}
console.log([...object.simple()]); //['a', 'b']

class Class{
    *simple(){ yield 'a'; yield 'b';}
}
console.log([...new Class().simple()]); //['a', 'b']

class Fancy{
    *[Symbol.iterator]() {yield 'a'; yield 'b';}
}

console.log([...new Fancy()]); //['a', 'b']

//6
function* oneTwo(){
    yield 1;
    yield 2;
}

function* fancy(){
    yield* oneTwo();
    yield 3;
    yield 4;
    yield* [5, 6];
}

for(const value of fancy()){
    console.log(value);
}