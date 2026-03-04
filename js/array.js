let fruitsArr = ['banana' , 'apple']

let fruitsArrCopy = [...fruitsArr]

let fruitsArrCopy2 = Array.from(fruitsArr)

let fruitsArrCopy3 = fruitsArr.slice()


let fruitsArrCopy4 = Array(4)

fruitsArrCopy4.push("pmegranade")



fruitsArrCopy.push("Guava")
fruitsArrCopy2.push("PineApple")
fruitsArrCopy3.push("kiwi")




console.log(fruitsArr)
console.log(fruitsArrCopy)
console.log(fruitsArrCopy2)
console.log(fruitsArrCopy3)
console.log(fruitsArrCopy)



console.log(fruitsArr[3])
console.log(fruitsArr.at(3))
console.log(fruitsArr.at(0))


const str1  = 'debabrata'

console.log(str1.charAt(30))
console.log(str1[3])


console.log(fruitsArr.includes('apple',0))
console.log(fruitsArr.includes('apple',1))





fruitsArr.splice(0,1)

console.log(fruitsArr)


let numArr = [1,2,3,4,5]

numArr.shift()

console.log(numArr)

numArr.unshift(10)

console.log(numArr)


let numArr2 = Array.from(numArr)
console.log(typeof numArr2[0])



let combineArr = [1,[2,3]]

console.log(combineArr.flat())


let arr5 = [1,2,3]

let chk = {...arr5}
console.log(chk)