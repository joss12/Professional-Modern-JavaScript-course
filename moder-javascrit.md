```javascript

const people = [
    {
        name: 'Eddy'
    },
    {
        name: 'John'
    },
    {
        name: 'Mary'
    }
];

//solution1
for(let index = 0; index< people.length; index++){
    const person = people[index];
    console.log('Person', person.name);
}
//solution2
for(const person of people){
    console.log('Person', person.name);
}

//2
const places = ['paris', 'london', 'berlin', 'tokyo', 'amsterdam'];
const favourites = ['lbv', 'tokyo', 'istanbul'];

let match;
for(const place of places){
    for(const favourite of favourites){
        if(place === favourite){
            match = place;
            break;
        }
        console.log([place, favourite]);
    }
    if(match) break;
}
console.log(match);

//3
for(let i = 0; i < 15; i++){
    if(i % 3 === 0) continue;
    if(i % 5 === 0) continue;

    console.log(i);
}
//4
const point = {x:3, y:1, z:2};

for(const key in point){
    const value = point[key];
    console.log(`${key}: ${value}`);
}

Object.entries(point);
[
    ['x', 3],
    ['y', 1],
    ['z', 2]
];
for(const [key, value] of Object.entries(point)){
    console.log(`${key}: ${value}`);
}

//5
const cars = ['volvo', 'audi', 'bmw','mercury'];
for(const car of cars){
    console.log(car);
}

cars.forEach(car=>console.log(car));
let hasAudi;

for(const car of cars){
    if(car === 'audi'){
        hasAudi = true;
        break;
    }
}

hasAudi = cars.findIndex(car => car === 'Audi') !== -1;

const input = [1, 2, 3, 4, 5, 6, 7]

for(const value of input){
    if(value === 2) continue;
    if(value === 5) break;
    console.log(value)
}

input.find(value=>{
    if(value === 2) return;
    if(value === 5) return true;

    console.log(value)
})


