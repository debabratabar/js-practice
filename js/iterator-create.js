let obj1 = {
    movies : ['Drishyam' , 'tarzen' , 'Dhurandhar' ,'Singham'],
    start : 0 ,
}


obj1[Symbol.iterator] = function(){
    const movieArr = this.movies
    let index = this.start

    return { 

        next(){
            if ( index < movieArr.length){
                return  {done : false ,value : movieArr[index++]}
            }

            return { done: true}
        }
    }

}


for(const ele of obj1){
    console.log(`MOvie playing: ${ele}`)
}


    // obj1.forEach((ele) => {console.log(`MOvie playing: ${ele}`)});
