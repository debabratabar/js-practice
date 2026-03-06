console.log("promise learning start 1");

const promise1 = new Promise((res , rej)=>{
console.log("promise inside and before res")
    setTimeout(()=>{
            console.log("i am in a promise");
            res('promise resolved')
            rej('promise rejected')
    } , 2000)

console.log("promise inside and after res")

}) 

console.log("promise learning start 2");



promise1
    .then((data) => { console.log('first-then'); return data
    })
    .then(console.log)
    .catch(console.log)

console.log(promise1);
console.log(typeof promise1);
// setTimeout(()=>{
//     console.log(promise1);
    
// },2000)

console.log("promise learning start 3");



const bookTrain = () => {
    return new Promise((resolve) => {   setTimeout( () =>  resolve("Train has booked") ,2000 ) })
}
const bookHotel = () => {
    return  new Promise((resolve, reject) => {   setTimeout( () => { resolve("Hotel has booked")} ,2000 ) })
}
const bookCab = () =>{
    return  new Promise((resolve, reject) => {   setTimeout( () => { resolve("Cab has booked")} ,2000 ) })
}
const planSightseeing = () =>{
    return  new Promise((resolve, reject) => {   setTimeout( () => { resolve("Trip planned")} ,2000 ) })
}

// bookTrain().then( (data) => {
//     console.log(data);
//     return bookHotel();
//   })
//   .then((data) => {
//     console.log(data)
//     return bookCab()
//   })
//   .then((data) => {
//     console.log(data)
//      return planSightseeing()
//   })
//   .then((data) => {
//     console.log(data)
//     console.log("Trip planned 🎉");
//   })
//   .catch(() => {
//     console.log("Something went wrong ❌");
//   });











