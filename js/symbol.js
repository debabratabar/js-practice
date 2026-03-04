let obj1 = Symbol('name')
let obj2 = Symbol('name')


console.log(obj1 == obj2)

// global symbol
let obj3 = Symbol.for('name')
let obj4 = Symbol.for('name')

console.log(obj3 == obj4);



let obj5 ={
    name : 'debabrata' ,
    age : 26 ,
    class : "higher" , 
    [obj3] : 1, 
}


for ( let key in obj5){
    console.log(`${key} ->${obj5[key]}`);
    
}


console.log(obj5.hasOwnProperty(obj3))



let obj6 ={
    name : 'debabrata' ,
    age : 26 ,
    [Symbol.toPrimitive](hint){
            if( hint === 'string'){
                return this.name
            }
            return this.age
    } 
}



console.log(String(obj6));
console.log(Number(obj6));


