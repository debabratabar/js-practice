
// filter polyfills 
Array.prototype.filter2 = function(fn) { 
        let res = []
        for ( const i of this){
            if( fn(i)){
                    res.push(i)
            }
        }
        return res
}


// map polyfills 
Array.prototype.map2 = function(fn) { 
        let res = []
        for ( const i of this){
            res.push(fn(i))
        }
        return res
}

// reduce pollyfills 
Array.prototype.reduce2 = function(fn,inVal) { 
        // let res = []
        let sum = inVal
        for ( const i of this){
            sum = fn(sum,i)
        }
        return sum
}


Array.prototype.flat2  = function() { 
        if ( Array.isArray(this) ) {
                
        }
        else{
                return [].push(flat2())
        }
}





let arr1 = [1,2,3,4,5,6]
let arr2 = [1,[2],[3,4],5,6]


let div_by_2_arr = arr1.filter2((ele)=>  ele%2 == 0 )

let arr_by_2 = arr1.map2((ele)=>  ele*2 )

let arr_sum = arr1.reduce2( (acc,ele) => (acc+ele) , 0)


let flatArr = arr2.flat2()


console.log(div_by_2_arr)
console.log(arr_by_2)
console.log(arr_sum)

