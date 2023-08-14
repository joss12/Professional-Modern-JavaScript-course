```javascript

/**execute the code by typing: node --expose_gc index.js*/

//1
const memoryUsed = () => 
Math.floor(process.memoryUsage().heapUsed / (1e6)) + 'MB'

const collectGarbage = () =>{
    const before = process.memoryUsage().heapUsed;
    global.gc()
    const after = process.memoryUsage().heapUsed;
    console.log(`Garbage collected: ${Math.floor((before - after) / 1e6)} MB`);
}

class Heavy{
    constructor(char){
        this.large = new Array(100_00).fill(char);
    }
}

function consume(char){
    const items = [];
    for(let index = 0;index < 2500; index++){
        items.push(new Heavy(char));
    }
    return items;
}

main();

function main(){
    console.log('---------- FIRE and FORGET ----------');
    console.log('start', memoryUsed());
    consume('Garbage');
    console.log('end', memoryUsed());
    collectGarbage()

    console.log('start', memoryUsed());
    consume('👌');
    console.log('end', memoryUsed());
    collectGarbage();

    console.log('start', memoryUsed());
    consume('⏩');
    console.log('end', memoryUsed());
    collectGarbage();

    console.log('---------- KEEP the RESULT ----------');

    console.log('start', memoryUsed());
    const un = consume('🙂');
    console.log('end', memoryUsed());
    collectGarbage();

    console.log('start', memoryUsed());
    const deux = consume('🙂');
    console.log('end', memoryUsed());
    collectGarbage();

    console.log('start', memoryUsed());
    const trois = consume('🙂');
    console.log('end', memoryUsed());
    collectGarbage();
}