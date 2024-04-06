// Primitive 

// 7 types: string, Number, Boolearn, null, undefined, symbol, BigInt
// Symbol // ye unique identi ke liye use hota h Ex-

// const id = Symbol('123');
// const anotherId = Symbol('123');

// const score =false



// Refrence(Non prmitive)

// Array, object ,Functions

// const heros =['shatiman', 'naagraj','dog']
// let myobj = {
//     name:"rahul",
//     age:20,
// }

//  const myfunction= function(){
//     console.log("hello world")
//  }


 // ****************************************************************

 // Stack (primitive)// iski copy milti memory ki , isme changes krne ke baad new copy generat hoti h usme changes hote h // ,
// Heap(non-primitive) // isme refrence milta h memory ki , origin value me hi changes hote h 


//------------------------------- Stack example
// let myYoutubename = "ihigherghe" 

// let anothername = myYoutubename 
// anothername = "chaiar cdoe" 

// let my = anothername
// my = "shikha"
// console.log(myYoutubename) 
// console.log(anothername)
// console.log(my)

// -------------------------------- Heap example

let rahul = {
    surname: "garg"
}

let jatin  = rahul
jatin.surname = "gupta"


console.log(rahul)
console.log(jatin)