````javascript
//1
const people = ['Eddy', 'Grace', 'Stan'];

for(let i = 0; i < people.length; i++){
    console.log(people[i]);
}

let i = 0;
while(i < people.length){
    console.log(people[i]);
    i++;
}
console.log(i);

// 1.1

const people = ['Eddy', 'Grace', 'Stan'];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

let i = 0;
while(i < people.length){
    console.log(people[i]);
    i++;
}
console.log(i); //4

//remove a person one by one and log it.

let person;
while(person = people.pop()){
    console.log('Popped:', person);
}

console.log(people);

//2
let current1 = 0;
let current2 = 1;

do{
    console.log(current1);
    [current1, current2] = [current2, current1 + current2];
}while (current1 < 100)

