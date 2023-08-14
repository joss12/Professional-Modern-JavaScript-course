```javascript

//1
const promise= new Promise((resolve, reject)=>{
    //do some async work
    setTimeout(()=>{
        // resolve('Arrived');
        reject(new Error('Failure'))
    }, 1000)
    //resolve Or reject
})
.then((value)=>{console.log('Fulfilled', value)})
.catch((error)=>{console.log('Rejected', error)})
.finally(()=>{console.log('Settled')});

//2
function resolve(value){
    return  new Promise(res => res(value));
}

function reject(error){
    return new Promise((_, rej)=> rej(error));
}


resolve('Success')
.then(v =>console.log(v));
reject(new Error('Failed to resolve'))
.catch(e => console.log(e.message));

Promise.resolve('Success')
.then(v =>console.log(v));
Promise.reject(new Error('fail'))
.catch(e => console.log(e.message));

//3
Promise.resolve(123)
.then((v)=>{
    console.log(v);
    return 456
})
.then((v)=>{
    console.log(v);
    return Promise.resolve(789)
})
.then((v)=>{
     console.log(v)
});

//4
function resolved(value){
    return new Promise(resolve => resolve(value));
}

const delayFulfill = () => new Promise(
    res => setTimeout(() => res('fulfilled'), 1000)
);

const delayReject = () => new Promise(
    (_, rej) => setTimeout(()=> rej(new Error('rejected')), 1000)
);

const alpha = resolved(delayFulfill());
const beta = resolved(delayReject());


alpha
.then(v => console.log('alpha then', v))
.catch(e => console.log('alpha catch', e.message));
beta
.then(v => console.log('beta then', v))
.catch(e => console.log('beta catch', e.message));

//5
function run(cb){
    setTimeout(()=>{
        cb();
        setTimeout(()=>{
            cb();
            setTimeout(()=>{
                cb();
            }, 1000);
        }, 1000);
    }, 1000);
}

run(()=> console.log('Is running...'));

//6
const wait = (ms) => new Promise(
    (res)=> setTimeout(res, ms)
);
function run(cb){
    wait(1000)
    .then(cb)
    .then(() =>wait(1000))
    .then(cb)
    .then(()=> wait(1000))
    .then(cb);
}

run(()=> console.log('Is running...'));

//7
new Promise(res=>{
    res('Running');
})
.then(v =>{
    console.log('then', v);
    return 'Is running'
})
.then(v =>{
    console.log('then', v);
})
.catch(e =>{
    console.log('catch', e.message)
});

//8
new Promise(res=>{
    res('Running');
})
.then(v =>{
    console.log('then', v);
    // return 'Is running'
    return Promise. reject(new Error('Failed'))
})
.then(v =>{
    console.log('then', v);
    throw new Error('Failed')
})
.catch(e =>{
    console.log('catch', e.message)
})

