```javascript
//1
let a = {element: 'div'};
let b = {element: 'input'};

let set = new Set();
set.add(a);
set.add(b);

console.log(set.has(a)); // true
console.log(set.has(b)); //true

a = null;
b = null;

//Set => has an internal strong reference to its members
console.log([...set]); // [{element: 'div'}, {element: 'input'}]


//2
let x = {element: 'div'};
let y = {element: 'input'};

let weakset = new WeakSet();
weakset.add(x); //true
weakset.add(y); //true

console.log(weakset.has(x)); //true
console.log(weakset.has(y)); //true

x = null;
y = null;

//3
const alpha = {name: 'autobot'};
const omega = {name: 'deception'};

const weakSet = new WeakSet();

weakSet.add(omega);

console.log(weakSet.has(omega)); //true
console.log(weakSet.delete(omega)); //true
console.log(weakSet.has(omega)); //false
console.log(weakSet.delete(omega)); //false 


//4

function fill(setLike,  char){
    const objects = [...Array(2500)]
    .map(_=> ({id: new Array(100_000).fill(char)}));
    for(const object of objects){
        setLike.add(object);
    }
}

const memoryUsed = () => 
Math.floor(process.memoryUsage().heapUsed / (1e6)) + 'MB'

const collectGarbage = () =>{
    const before = process.memoryUsage().heapUsed;
    global.gc()
    const after = process.memoryUsage().heapUsed;
    console.log(`Garbage collected: ${Math.floor((before - after) / 1e6)} MB`);
}

console.log('---------------SET-----------------');
let set = new Set();

console.log('Start', memoryUsed());
fill(set, '😢');
console.log('After', memoryUsed());
collectGarbage();

console.log('-------------- DeScope Set --------------');
set = null;
collectGarbage();

console.log('-------------- WeakSet --------------');
const weakSet = new WeakSet();
console.log('Start', memoryUsed());
fill(weakSet, '🤗');
console.log('After', memoryUsed());
collectGarbage();

//5
const visited = new WeakSet();
function hasVisited(object){
    return visited.has(object);
}

function visit(object){
    visited.add(object);
}


let eddy = {name: 'eddy'};
let grace = {name: 'grace'};
let stan = {name: 'stane'};

visit(eddy);
visit(grace);

console.log(hasVisited(eddy));
console.log(hasVisited(grace));
console.log(hasVisited(stan));

eddy = null;
grace = null;
stan = null;

//objects previously referenced by eddy, grace, stan can now be garbage collected