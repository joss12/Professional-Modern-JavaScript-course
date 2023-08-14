```javascript

#Iterator
//Object
//  next() =>{value,  done: boolean}

//1
function range(start = 0, end = Infinity, step = 1){
    let value = start;

    return{
        next(){
            const done = value > end;
            if(done){return {value: undefined, done}}
            let result = {value,  done};
            value += step;
            return result;
        }
    }
}
const iterator = range(0, 2);
console.log(iterator.next());

//2
const arr = ['a', 'b', 'c'];
console.log(arr[Symbol.iterator]); // [Function: value]

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//3
const message = 'Holla';

for(const char of message){
    console.log(char);
}


const iterator = message[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//4
function range(start = 0, end =Infinity, step = 1){
    let value = start;
    const iterator = {
        next(){
            const done = value > end;
            if(done){return {value: undefined, done}}
            let result = {value, done};
            value += step;
            return result;
        },
    };
    return{
        [Symbol.iterator](){
            return iterator;
        }
    }
}
for(const value of range(0, 10, 2)){
    console.log(value)
}


//5
function range(start = 0, end =Infinity, step = 1){
    let value = start;
    const iterator = {
        next(){
            const done = value > end;
            if(done){return {value: undefined, done}}
            let result = {value, done};
            value += step;
            return result;
        },
    };
    return{
        [Symbol.iterator](){
            return iterator;
        }
    }
}

const loop = [];

for(const value of range(0, 10, 2)){
    loop.push(value);
}

console.log(loop);

const from = Array.from(range(0, 10, 2))
console.log(from);

const spread = [...range(0, 10, 2)];
console.log(spread)

//6
function range(start = 0, end = Infinity, step = 1){
    let value = start;
    const next = () =>{
        const done = value >end;
        if(done){ return {value: undefined, done}}
        let result = {value, done};
        value += step;  
        return result;
    }

    const iterator = {next};

    const iterable = {
        [Symbol.iterator](){return {next};},
    };

    const iterableIterator = {
        next,
        [Symbol.iterator](){return{next};}
    };

    return{
        next,
        [Symbol.iterator]() {return this}
    }
}

let result = range(0, 2);
let value, done;
while(
    ({value, done} = result.next())
    && !done
){
    console.log(value); // 0, 1, 2
}

console.log([...range(0, 2)])


