let bigIntVal = 999_999_999_999_999_999_999
console.log(typeof bigIntVal);
 
console.log(null === undefined);
console.log(null === NaN);
console.log(undefined === NaN);


let obj1 = new Object({
     name : "claude",
     model : 2.5,
     "realesed on" : 2026,
})

console.log(obj1);
console.log(obj1['name']);
console.log(obj1.name);



let obj2 ={
     "round" : 2 ,
    1:"india",
    45:"asia",
    23:"USA",
    2:"adra",
}

for ( let key in obj2){
    console.log(`${key} - ${typeof key} -${obj2[key]}`);
    
}


let a = ''
let b = ''

console.log(a===b);


let objA = {}
let objB = objA

console.log(objA == objB);
console.log(objA === objB);

