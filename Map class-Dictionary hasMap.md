```javascript

//1
const nameToAge = new Map();
nameToAge.set('eddy', 32);
nameToAge.set('grace', 8);
nameToAge.get('eddy', 33);
nameToAge.get('eddy');
nameToAge.get('grace');

const countryToCapital = new Map([
    ['France', 'Paris'],
    ['Gabon', 'Libreville'],
    ['Korea', 'Seoul']
]);
console.log(countryToCapital, countryToCapital instanceof Map); //true
console.log(nameToAge, nameToAge instanceof Map); // true

//2
const prices = new Map([
    ['cucumber', 50],
    ['tomatoes', 20]
]);
for(const entry of prices.entries()){
    console.log(entry)
}
for(const entry of prices){
    console.log(entry);
}
console.log([...prices]);
console.log([...prices.keys()]);
console.log([...prices.values()]);

const pricesCopy = new Map(prices);
console.log(pricesCopy);


//3
const objAsMap = Object.create(null);
objAsMap['Hi'] = 'hi';
objAsMap[Symbol('french')] = 'Bonjour';
objAsMap[123] = 'salam';
objAsMap['123'] = 'hola';
objAsMap[{name: 'Eddy'}] = 'Shalom';
objAsMap[{name: 'Grace'}] = 'konnichiwa';
console.log(objAsMap);


//3.1
const map = new Map();
map.set('hi', 'hi');
map.set(Symbol('french'), 'bonjour');
map.set(123, 'salam');
map.set('123', 'hola');
map.set({name: 'Eddy'}, 'Konnichiwa');
map.set({name: 'Grace'}, 'Salut');
console.log(map);

//4
const orders = [
    ['Eddy', 'Burger'],
    ['Grace', 'Steak'],
    ['Eddy', 'Salad']
]

const orderGrouped = new Map();
for(const [name, item] of orders){
    if(orderGrouped.has(name)){
        orderGrouped.get(name).push(item);
    }else{
        orderGrouped.set(name, [item]);
    }
}
console.log([...orderGrouped]);

//5
const balance = new Map();
balance
.set('Eddy', 10)
.set('Grace', 18);

console.log(balance.get('Eddy')); //10
console.log(balance.get('john')); // undefined

balance.delete('Eddy'); //true
balance.delete('john'); // false

balance.has('Grace'); // true
balance.has('john'); // false

console.log(balance); // Map {'Grace' => 18}
console.log(balance.size); // 1

balance.clear();
console.log(balance);

//6
const countryToFlag = new Map([
    ['United States', ''],
    ['France', ''], 
    ['Australia', ''],
]);

const obj = Object.fromEntries(countryToFlag);
console.log(obj);

const map = new Map(Object.entries(obj));
console.log(map);

//7
const obj1 = {name: 'Eddy'};
const obj2 = {name: 'Grace'};

console.log(obj1 === obj2); // false
console.log(obj1 === obj1); //true
console.log(obj2 === obj2); // true

const ageMap = new Map();
ageMap.set({name: 'Eddy'}, 20);
ageMap.set({name: 'Grace'}, 21);

console.log(ageMap);

//8
const obj1 = {name: 'Eddy'};
const obj2 = {name: 'Grace'};

console.log(obj1 === obj2); // false
console.log(obj1 === obj1); //true
console.log(obj2 === obj2); // true

const ageMap = new Map();
ageMap.set({name: 'Eddy'}, 20);
ageMap.set({name: 'Grace'}, 21);

console.log(ageMap);
ageMap.clear();

const eddy = {name: 'Eddy'};
ageMap.set(eddy, 20);
ageMap.set(eddy, 21);

console.log(ageMap);

let personMap = new Map();
personMap.set('Alice', {name: 'Alice', age:20});
personMap.set('Alice', {name: 'Alice', age:21});

console.log(personMap);