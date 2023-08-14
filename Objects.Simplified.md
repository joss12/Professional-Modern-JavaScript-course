```JavaScript

let channing = {name: 'magic mike', gender: 'male'};

console.log(channing.name); // magic mike

channing.name = 'eddy';
console.log(channing.name); // 'eddy'

channing.kill = 'dance'
console.log(channing.kill); // 'dance'

channing.born = 1980;
console.log(channing.born); // 1980


channing.planet = {name: 'earth'};
console.log(channing.planet.name); // 'earth'


/**Objects are mutable references */
const channing = {name: 'Eddy'};
console.log(channing.name); // Eddy

channing.name = 'tatum'; //
console.log(channing.name); // tatum

channing = {name 'tatum'}; //Error: cannot reassign const


/**Simple primitives are immutable values */
const person = 'Eddy Mouity';
console.log(person.toUpperCase()); //EDDY MOUITY
console.log(person); //Eddy Mouity


const diet = 'food';

const alien ={
    name: 'Eddy',
    'age':32,
    'current-status': 'Admin',
    ['home'+'planet']: 'earth',
    ['favorite'+ diet]: 'pizza',
}


console.log(alien.name);
alien.name = 'John';


console.log(alien['name']);
alien['name'] = 'Jane';

console.log(alien['current-status']);
console.log(alien['favorite'+ diet]);


const digits = {
    1: 'one',
    dos: 'two',
    3: 'three',
}

console.log(digits.dos);
console.log(digits['dos']);

console.log(digits[1]); //one
console.log(digits['1']); //one


digits[1] = 'un';
console.log(digits[1], digits['1']); // 'un', 'un'
digits['1'] = 'UN';
console.log(digits[1], digits['1']); // 'UN', 'UN'


const personA = {name: "Eddy"};
const personB = {name: "Joss"};

console.log(personA === personB); //false


console.log(personA === personA); //true
console.log(personB === personB); //true

const personC = personA;

 console.log(personC === personA); //true

 personC.name = "Eddy";
 console.log(personA.name);


 //example 1
const make = 'ford';
const model = 'Mustang';
const color = 'White';

let car;

//example 2
car ={
    name:make,
    model:model,
    color:color
}

//example 3
car ={
    name,
    model,
    color
}



//spread operator
const point2d = {
    x:0,
    y:0,
};

/**Spread operator helps us to spread the key of one value into another */
//example 1
let point3d = {
    x:point2d.x,
    y:point2d.y,
    z:0
}
//example 2 the better way
point3d ={
    ...point2d,
    z:0
}


let taskPending = {
    title: 'Record Course',
    when: 'Today',
    isCompleted: false,
};

let taskCompleted;

taskCompleted = {
    ...taskPending,
    isCompleted: true,
}

taskCompleted ={
    isCompleted: true,
    ...taskPending
}

console.log(taskPending)


//Destructuring

let point = {
    x:0,
    y:10,
    z:20
}


{
    const x = point.x, y = point.y;
}

{
    const {x,y} = point;
}

{
    const {x:pointX, y:pointY, z:pointZ } = point;
    console.log(pointX, pointY, pointZ);
}

{
     const {x, ...rest} = point;
     console.log(x, rest)
}



const bird = {
    type: 'chicken',
}

bird.name = 'liftoo';
console.log(bird); //{type:'chicken', name:'liftoo'}

bird.name = undefined;
console.log(bird); //{ type: 'chicken', name: undefined }

console.log('name' in bird); // true

delete bird.name;
console.log(bird); 