 ```javascript
 //1
 function nature(num){
    let result;
    if(num >= 0){
        result = 'positive';
    }else{
        result = 'negative';
    }
    return result;
 }

console.log(nature(10)); //positive
console.log(nature(-10)); //negative

//2
function nature(num){
    if(num === 0){
        return "zero";
    }else if(num > 0){
        return "positive";
    }else{
        return "negative";
    }
}
console.log(nature(0));// zero
console.log(nature(3)); //positive
console.log(nature(-5)); //negative

//3
function checkValue(a, b){
    if(a === 1)
    if(b === 2)
    console.log("a is 1 and b is 2");
    else
    console.log("a is not 1");
}

 checkValue(1 ,2) //a is 1 and b is 2
 checkValue(1,3) //a is not 1
//4
 function sadPanda(sing){
    if(sing)
    console.log("I am sad");
    console.log("I am not sad");
    console.log("I am exhausted");
}
sadPanda(false);