```javascript

#Tenary Operators
/**
 * The Tenary operator is a condition operator which evaluates either
 * of two expressions -a true expression and a false expression
 * - based on a condition expression that you provide.
 */
//1
const condition = Math.random() < 0.5;

const value = condition ? 'Head' : 'Tail';
console.log(condition, value);

//2
const score = 50;
const scoreRating = score > 70 ? 'Excellent' : 'Do better'
console.log(scoreRating); //Do better
const scoreRating1 = score < 70 ? 'Excellent' : 'Do better'
console.log(scoreRating1); //Excellent


//3
const items = [1, 2,4, 10, 3];

const max = items.reduce(
    (acc, curr)=>{
        if(curr > acc){
            return curr;
        }else{
            return acc;
        }
    },
    -Infinity
);
console.log(max); //10

//4
const items = [1, 2,4, 10, 3];

const max = items.reduce(
    // accumulator, current
    (acc, curr)=> curr > acc ? curr : acc,
    -Infinity
);
console.log(max); //10

//5
let weather, lower, upper, head
[lower, upper, head] = weather === 'warm' ?
['shorts', 'shirt', 'cap'] : ['jeans', 'sweater', 'beanie'];
console.log(lower, upper, head);

//6
// function nature(num){
//     if(num === 0){
//         return 'zero';
//     }else if(num > 0){
//         return 'positive';
//     }else{
//         return 'negative';
//     }
// }


function nature(num){
    return(
        num === 0 ? 'zero' : 
        num > 0 ? 'positive' :
        'negative'
    )
}

console.log(nature(0)); //zero
console.log(nature(3)); //positive
console.log(nature(-5)); //negative

//7
const formatedDiscounted = (price, isDiscount) => {
    const suffix = isDiscount ? '%': '$';
    return price + suffix;
}
console.log(formatedDiscounted(20, true)); //20%
console.log(formatedDiscounted(20, false)); //20$