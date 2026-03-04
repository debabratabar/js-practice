let obj1 = { 
    name :'Deb',
    education : {
        school : 'abc School',
        college : 'xyz college'
    }
}

let newobj1 = [{ 
    name :'Deb',
    education : {
        school : 'abc School',
        college : 'xyz college'
    }
},
{
 name :'Deb',
    education : {
        school : 'abc School',
        college : 'xyz college'
    }
}]


let obj3 = structuredClone(obj1)


let obj2 = {...obj1}
obj2.education.college = 'abcd college'


console.log(obj1)
console.log(obj2)
console.log(obj3)


console.warn("ERROR!!!")
console.error("ERROR!!!")

console.table(newobj1)


const inf1= (1/0)
const inf2= (-23/0)

console.log(inf1 == inf2)
console.log(inf1 === inf2)
