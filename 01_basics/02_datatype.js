//------------------------------------------------------------------
//--------------------DATATYPE -------------------------------------

console.log(3+3);

let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 


//----------------------Notes---------------------------------------

// "USE STRICT" // treat all js code as new version

// data type -

// number = 2 to power 53
// bigint
// string=> ""
// boolean => ture/false
// null=> standalone value // object ans
// undefined => // undefined ans
// symbol => unique
// object

// let valueInNumber = Number(score) // string ko number me convert kr deta h lekin agr valueinnumber ko clg krenge to bo Nan dega 

const id  = Symbol("123")
const para = Symbol('123')
