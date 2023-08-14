```javascript


//1
let ref = { x: 10, x: 10};
console.log(ref.x, ref.y); //10 10

let weakRef = new weakRef({x: 10, y:10});
console.log(weakRef.deref().x, weakRef.deref().y); // 10 10

//After Garbage Collection

ref; //{x:10, y:10}
weakRef.deref(); //undefined


console.log(ref.x, ref.y); // 10 10
console.log(weakRef.deref()?.x, weakRef.deref()?.y); // undefined undefined undefined