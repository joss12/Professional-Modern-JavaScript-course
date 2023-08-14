```javascript


//1
function allocate(){
    const result = [];
    for(let i = 0; i < 2500; i++){
        result.push({heavy:  new Array(100_000).fill("💥")});
    }
    return result;
}

let result = allocate();
console.log(result.length);

let another1 = allocate();
console.log(another1.length);
let another2 = allocate();
console.log(another2.length);
let another3 = allocate();
console.log(another3.length);
let another4 = allocate();
console.log(another4.length);


//2
function allocate(){
    const result = [];
    for(let i = 0; i < 2500; i++){
        result.push({heavy:  new Array(100_000).fill("💥")});
    }
    return result;
}

let result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);
result = allocate();
console.log(result.length);

//3
function allocate(){
    const result = [];
    for(let i = 0; i < 2500; i++){
        result.push({heavy:  new Array(100_000).fill("💥")});
    }
    return result;
}

const closure = (value) =>{
    const getLength = () => value.length;
    return getLength;
}


const fn1 = closure(allocate());
console.log(fn1()); //2500

const fn2 = closure(allocate());
console.log(fn2()); //2500

const fn3 = closure(allocate());
console.log(fn3()); //2500

const fn4 = closure(allocate());
console.log(fn4()); //2500

//4
function allocate(){
    const result = [];
    for(let i = 0; i < 2500; i++){
        result.push({heavy:  new Array(100_000).fill("💥")});
    }
    return result;
}

const closure = (value) =>{
    const length = value.length;
    const getLength = () => value.length;
    return getLength;
}


const fn1 = closure(allocate());
console.log(fn1()); //2500

const fn2 = closure(allocate());
console.log(fn2()); //2500

const fn3 = closure(allocate());
console.log(fn3()); //2500

const fn4 = closure(allocate());
console.log(fn4()); //2500