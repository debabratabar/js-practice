let num = 1e6
// console.log(num);



let arr1=[]

arr1[7] = 6
// console.log(arr1);

let arr2 =[1,2,3,4,6,6,7,7]
// let res =  arr2.splice(4,1 , 5)
let res =  arr2.toSpliced(4,1 , 5)
console.log(arr2);

arr2.splice()
console.log(arr2);
console.log(res);


console.log(arr2.concat(arr2))



let res2 = arr2.filter((ele) => ele%2 ==0 )


console.log(res2);
console.log(arr2);

for ( const i in arr2){
    console.log(`${i} --> ${arr2[i]}`);
    
}


let obj1 ={
    name : 'debu',
    age : 15 ,
}





for ( const i in obj1){
    console.log(i);
    
}
