```javascript


//1
function simple(value){
    console.log(value, this);
}

simple(123);

const person = {
    name: 'John',
}

simple.call(person, 456);
person.simple = simple;
person.simple(789);


//2
class Point{
    constructor(x, y){
        console.log(this);
        this.x = x;
        this.y = y;
    }
    log(){
        console.log(this.x, this.y)
    }
}

const point = new Point(1, 2);
console.log(point); 
console.log(point.x, point.y);
point.log(); //1 ,2

//3
function growOlder(){
    this.age++;
}
const jane ={
    name: 'Jane',
    age: 32,
    growOlder
}

const john = {
    name: 'John',
    age: 21,
    growOlder
}
jane.growOlder();
console.log(jane.age);
john.growOlder();
console.log(john.age);

//4
//function bind
function logName(){
    console.log(this?.name);
}
logName();

const eddy = {name: 'Eddy', logName};
const grace = {name: 'Grace', logName};

eddy.logName()// Eddy
grace.logName()// Grace

const logNameGrace = logName.bind(grace);
logNameGrace() //Grace
logName(); //undefined

const joss = {name: 'joss', logName: logNameGrace};
joss.logName(); //Grace

//5
class Auth{
    isLoggedIn = false;
    login = () => {this.isLoggedIn = true}
    logout = () =>{this.isLoggedIn = false}
}

const auth = new Auth();
auth.login();
console.log(auth.isLoggedIn); //true
auth.logout();
console.log(auth.isLoggedIn);

const login = auth.login;
login(); //this is undefined
console.log(auth.isLoggedIn); //true
setTimeout(auth.logout, 1000) //ERROR: this is undefined
setTimeout(function (){
    console.log(auth.isLoggedIn)
}, 2000);

//6
class Auth{
    isLoggedIn = false;
    login = () => {this.isLoggedIn = true}
    logoutSoon = () =>{
        if(this.isLoggedIn){
            setTimeout(function(){
                console.log('logging out...');
                this.logout();
            },1000)
        }
    }
    logout = () =>{this.isLoggedIn = false}
}

const auth = new Auth();
auth.login();
console.log(auth.isLoggedIn); //true
auth.logout();
console.log(auth.isLoggedIn);

const login = auth.login;
login(); //this is undefined
console.log(auth.isLoggedIn); //true
auth.logoutSoon();
setTimeout(function (){
    console.log(auth.isLoggedIn)
}, 2000);

//7
class Auth{
    login = () =>{this.isLoggedIn = true}
    logout = () =>{this.isLoggedIn = false}
    logoutSoon = () =>{
        if(this.isLoggedIn){
            setTimeout(function(){
                console.log('logging out');
                this.logout()
            },1000)
        }
    }
}

const auth = new Auth();
auth.login();
console.log(auth.isLoggedIn); //true
auth.logoutSoon()
setTimeout(function(){console.log(auth.isLoggedIn)}, 2000); //undefined

//8
class Auth{
    login = () =>{this.isLoggedIn = true}
    logout = () =>{this.isLoggedIn = false}
    logoutSoon = () =>{
        if(this.isLoggedIn){
            setTimeout(()=>{
                console.log('logging out');
                this.logout()
            },1000)
        }
    }
}

const auth = new Auth();
auth.login();
console.log(auth.isLoggedIn); //true
auth.logoutSoon(); //logout
setTimeout(function(){console.log(auth.isLoggedIn)}, 2000); //false

//9
class Calculator{
    constructor(value){
        this.value = value;
    }

    add(n){
        this.value += n;
        return this;
    }
    sub(n){
        this.value -= n;
        return this;
    }
}

console.log('1 + 3 -2');
console.log(new Calculator(1).add(3).sub(2).value); // 2