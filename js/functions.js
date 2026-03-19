const func1 = ( (x) => console.log(arguments) )


 function func2(x) { console.log(arguments) }


console.log(func1(2))
console.log(func2(2))



function outerFunc(item){


    function innerFunc(){
        console.log("===============");
        
            console.log(item);
            
    }

    return innerFunc
}


const f1 = outerFunc('pradip')

f1()