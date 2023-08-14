// @ts-nocheck
function heavyComputation(obj){
    let result = obj.value;
    for(let i = 0; i < 1_000_00; i++){
        result = (result + obj.value) / result;
    }
    return result;
}

const objects = [...Array(100)].map((_, i) => ({value: i}));
console.time('raw');
// @ts-ignore
objects.forEach(() => heavyComputation(0));
// @ts-ignore
objects.forEach(() => heavyComputation(0));
// @ts-ignore
objects.forEach(() => heavyComputation(0));
console.timeEnd('raw')