```javascript


//1
async function FuncDeclaration(){}
    const funcExp = async function (){}
        const arrowExp = async () =>{}
        class Class{async method(){}}


console.log(FuncDeclaration()); //Promise
console.log(funcExp());//Promise
console.log(arrowExp());//Promise
console.log(new Class().method()); //Promise


FuncDeclaration().then(v=> console.log(v)); //undefined
funcExp().then(v=> console.log(v)); // undefined
arrowExp().then(v=> console.log(v)); // undefined
new Class().method().then(v=> console.log(v)); // undefined

//2
async function simple(){
    return 'simple';
}
simple()
.then(v => console.log(v)); //simple

async function accepted(){
    return new Promise(
        res => setTimeout(()=> res('fulfilled'), 1000)
    );
}
accepted()
.then(v => console.log(v)); //fulfilled

async function denied(){
    return new Promise(
        (_, rej) => setTimeout(()=> rej(new Error('rejected')), 2000)
    );
}
denied()
.catch(v => console.log(v.message)); ///rejected

//3
function sync(){
    magic();
}
try {
    sync()
} catch (e) {
    console.log(e.message);
}

async function implicit(){
    magic();
}
const result = implicit();
console.log('isPromise', result instanceof Promise); // isPromise: true
result.catch(e => console.log(e.message));

async function explicit(){
    throw new Error('Failed')
}

explicit().catch(e => console.log(e.message))

//4
async function main(){
    const raw = 'not-a-promise';
    const funsies = await raw;
    console.log(funsies, funsies === raw); // 'not-a-promise', true

    const fulfilled = new Promise(resolve => setTimeout(()=>{
        resolve('fulfilled');
    }, 2000));

    const fulfilledResult = await fulfilled;
    console.log('result:', fulfilledResult); // 'fulfilled', true

    const rejected = new Promise((_, rejected)=> setTimeout(()=>{
        rejected(new Error('rejected'));
    }, 2000));

    try {
        const rejectedResult = await rejected;
        console.log('result:', rejectedResult);
    } catch (e) {
        console.log('error message', e.message);
    }
}

main();

//5
const wait = (ms) => new Promise(
    (res) => setTimeout(res, ms)
);

async function main(cb){
    await wait(1000);
    cb();
    await wait(1000);
    cb();
    await wait(1000);
    cb();
}
main(()=>console.log('Running...'));

//6
const wait = (ms) => new Promise(
    (res) => setTimeout(res, ms)
);

async function main(cb){
    for(let i = 0; i < 5; i++){
        await wait(1000);
        cb();
    }
}
main(()=>console.log('Running...'));

//7

async function main(){
    const userResponse = await fetch('https://api.github.com/users/basarat');
    const user = await userResponse.json();
    console.log('Name:', user.name)
    console.log('Twitter:', user.twitter_username);
    
    const {organizations_url} = user;
    const orgsResponse = await fetch(organizations_url);
    const orgs = await orgsResponse.json();
    console.log('Organizations:', orgs.map((org)=> org.login));
}
main();