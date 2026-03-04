console.log(this);


function thisTest(){
    console.log(this)
}

function thisTest2(){
    'use strict'
    console.log(this)
}



const practiceThis = {
    name : 'practiceFunc',
    funcThis(){
    console.log(this.name);
    
},
 funcThis1(){
    console.log(name);
    
},

 funcThis2 : () => { return this.name }

}



practiceThis.funcThis()
practiceThis.funcThis()
console.log(practiceThis.funcThis2() )
console.log('last line');

// thisTest()
console.log('-------------------------')
thisTest2()




const filmSet = {
  crew: "Spot boys",
  prepareProps() {
    console.log(`Outer this.crew: ${this.crew}`);

    function arrangeChairs(crew) {
      console.log(`Inner this.crew: ${crew}`);
    }
    arrangeChairs(this.crew);

    const arrangeLights = () => {
      console.log(`Arrow this.crew: ${this.crew}`);
    };
    arrangeLights();
  },
};


console.log(filmSet.prepareProps())



const actor = {
     name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
}

console.log(actor.bow());

const bowChk = actor.bow 

console.log(bowChk());

