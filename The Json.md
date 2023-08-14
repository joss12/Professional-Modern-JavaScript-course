```javascript

//1
const jsonString = `
    {
        "name": "John Doe",
        "age": 21
    }
`

const obj = JSON.parse(jsonString);

console.log(obj); //{name: "John Doe", age: 21}
console.log(obj.name); // 'John
console.log(obj.age); // 21

console.log(typeof obj); // "object"
console.log(typeof obj.name); // "string"
console.log(typeof obj.age); // "number"

//2
const person = {name: 'John', age: 23};
const jsonString = JSON.stringify(person);

console.log(typeof jsonString); //String

console.log(jsonString); // {"name": 'John', "age": 23}

//4
console.log(JSON.parse(`
{
    "name": "John",
    "age": 30,
    "isMarried":false,
    "children":null,
    "phoneNumbers":[
        {"type":"home","number":"123456789"},
        {"type":"mobile","number":"555-555-5555"}
    ],
    "address":{
        "streetNumber": "123",
        "streetName": "Main St",
    }
}
`
))

//5
console.log(JSON.parse('"Eddy"')); //Eddy
console.log(JSON.parse('23')); //23
console.log(JSON.parse('true')); // true
console.log(JSON.parse('null')); // null

console.log(JSON.parse('[1, 2, 3]')); // [1, 2, 3]

console.log(JSON.parse('{"name": "Eddy"}')); //{"name": "Eddy"} 

//6
const nums = {
    age: 25,
    price: 666.96,
    location: NaN,
    experience: Infinity,
};

console.log(JSON.stringify(nums));

//7
const person ={
    name: 'Eddy',
    age: undefined
}

console.log(person.age); //undefined;
console.log(person.location); //undefined;

console.log(JSON.stringify(person)); //{"name":"Eddy"}

//7.1
const person ={
    name: 'Eddy',
    age: null
}

// console.log(person.age); //undefined;
// console.log(person.location); //undefined;

console.log(JSON.stringify(person)); //{"name":"Eddy"}

//8
const mozilla = {
    foundation: "Mozilla",
    year: 1998
}

function replace(key, value){
    if(typeof value === "string"){
        return undefined;
    }
    if(key === 'year'){
        return '****';
    }
    return value;
}

console.log(JSON.stringify(mozilla, replace));
