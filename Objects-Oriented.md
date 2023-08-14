```javascript

//1
class Car{
    constructor(name){
        this.name = name
    }
    drive(){
        console.log(this.name, 'drive');
    }
}
const toyota = new Car('Toyota');
console.log(toyota.name);

//2
class Counter{
    count = 0;
    increment(){
        this.count++
    }
}

const counter = new Counter();
console.log(counter.count);
counter.increment();
console.log(counter.count);

//3
class Event{
    constructor(eventName){
            this.eventName = eventName;
        }
        fire(){
            console.log(this.eventName);
        }
}

const evt = new Event('click');
evt.fire(); // click
evt.eventName = 'open';
evt.fire(); //open

//4
class Event{
    #eventName;
    constructor(eventName){
        this.#eventName = eventName;
    }
    fire(){
        console.log(this.#eventName);
    }
}

const evt = new Event('click');
evt.fire(); //click

//5
class Event{
    #eventName;
    constructor(eventName){
        this.#eventName = eventName;
    }
    fire(){
        console.log(this.#eventName);
    }
}

const evt = new Event('click');
evt.fire(); //click
evt.#eventName = 'open' // ERROR: Private field

//6
class Square{
    constructor(size){
        this.size = size;
    }
    area(){
        return this.size * this.size;
    }
}

const unit = new Square(1);
const quad = new Square(4);
console.log(unit.area());
console.log(quad.area());

//7
class RangedValue{
    #current;
    constructor({min, max, value}){
        this.min = min;
        this.max = max;
        this.#current = value;
    }
    get value(){
        return this.#current;
    }
    set value(newValue){
        this.#current = Math.max(this.min, Math.min(this.max, newValue))
    }
}

const ranged = new RangedValue({value:5, min:0, max:10});
console.log(ranged.value); //5


ranged.value = 15;
console.log(ranged.value); //10

//8
class Aminal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log('yum yum');
    }
}

const simple = new Aminal('Dimple');
console.log(simple.name);
simple.eat();


class Bird extends Aminal {
    constructor(name, weight){
        super(name);
        this.weight = weight;
    }
    fly(){
        console.log(this.weight > 3 ? 'Too fat can fly' : 'I can not fly');
    }
}

const bird = new Bird('Polly',  2);
console.log(bird.name);//Polly
bird.eat(); //Too fat can fly
console.log(bird.weight);//2
bird.fly(); //I can not fly

//9
class Alpha{}
class Beta{}

const alpha = new Alpha();
const beta = new Beta();

console.log(typeof alpha); // "object"
console.log(typeof alpha); // "object"

console.log(alpha instanceof Alpha); // true
console.log(alpha instanceof Beta); // false

console.log(beta instanceof Alpha); // true
console.log(beta instanceof Beta); // false

//10
class Employee{
    constructor(id, name){
        if(!id || !name){
            throw new Error("Employee id and name are mandatory");
        }
        this.id = id;
        this.name = name;
    }
    setSalary(salary){
        this.salary = salary;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
}

class Manager extends Employee{
    setDepartment(name){
        this.department = name;
    }
    getDepartment(){
        return this.department;
    }
}

const employee = new Employee(1, "Eddy");
employee.setSalary(10000);
const manager = new Manager(2, "Grace");
console.log(employee);
console.log(employee.getId());
console.log(employee.getName());
console.log(employee.getSalary());
console.log(manager.setDepartment("Development"));
console.log(manager.getDepartment());