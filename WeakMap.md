```javascript
/**
 *We use weak map when we want to associate data to an object
 and tight that data into an object life cycle for memory perspective
 so both data and object get garbage collected, and to do it without 
 object prospective, you are going to use weak map
 */
//1
#Map
const map = new Map();

let x, y;

y = {element: 'div'};
y = {element: 'input'};

map.set(x, 'alpha');
map.set(y, 'omega');

console.log(map.get(x)); // alpha
console.log(map.get(y)); //omega

//x and y go  out of scope
x = null;
y = null;
console.log([...map.keys()]);

//2
#The weakMap function
//WeakMap

let x,y;
x = { element: 'div'};
y = {element: 'input'};

const weakMap = new WeakMap();

weakMap.set(x, 'alpha');
weakMap.set(y, 'omega');

console.log(weakMap.get(x));
console.log(weakMap.get(y));


// x  and y go out of scope
x = null;
y = null;

//weakMap => has no internal reference to it keys(original x or y)
// allows garbage collection of original x and y (+ their values)

//3
const alpha = {name: 'alpha'};
const omega = {name: 'omega'};

let weakMap = new WeakMap([
    [alpha, 'alpha']
]);

weakMap.set(omega, 'omega');
console.log(weakMap.get(alpha)); // 'alpha'
console.log(weakMap.delete(alpha)); // 'true'
console.log(weakMap.delete(alpha)); //false
console.log(weakMap.get(alpha)); // undefined
console.log(weakMap.has(alpha)); // false
console.log(weakMap.has(omega)); //true

//4
// @ts-nocheck
function heavyComputation(obj){
    let result = obj.value;
    for(let i = 0; i < 1_000_00; i++){
        result = (result + obj.value) / result;
    }
    return result;
}

const objects = [...Array(100)].map((_, i) => ({value: i}));
console.time('raw');
// @ts-ignore
objects.forEach(0 => heavyComputation(0));
// @ts-ignore
objects.forEach(0 => heavyComputation(0));
// @ts-ignore
objects.forEach(0 => heavyComputation(0));
console.timeEnd('raw');

const weakMap = new WeakMap();
function memorizedHeavyComputation(obj){
    if(weakMap.has(obj)){
        const result = heavyComputation(obj);
        weakMap.set(obj, result);
        return result;   
    }
    return weakMap.get(obj);
}

console.time('memorized');
objects.forEach(() => memorizedHeavyComputation(0))
objects.forEach(() => memorizedHeavyComputation(0))
objects.forEach(() => memorizedHeavyComputation(0))
console.timeEnd('memorized');