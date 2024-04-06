//********************** object ***************************88
// singleton


const mySym = Symbol("key1")
const jsuser = {
    name: "Rahul",
    "full name":"Rahul garg",
    [mySym]: "mykey1", //  agr is ko square bracket me nhi likenge to ye symbol ki traha use nhi hoga
    age: 20,
    location: "gwalior",
    email:"rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsuser.email) // rahul@gmail.com first method
console.log(jsuser["email"]) //rahul@gmail.com second method
console.log(jsuser["full name"]) // Rahul garg
console.log(jsuser.mySym) // mysum1
console.log(typeof jsuser.mySym) // string
console.log(typeof jsuser[mySym]) 