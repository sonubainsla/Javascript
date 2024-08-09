//  Primitive Data type 

//  there are 7 types present : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100   // int type 
const scoreValue = 100.3     // its also int type No Float is present in js 
const isLoggedIn = false    // its boolean type 
const outsideTemp = null     // null is also a data type 
let userEmail;                  // its undefined 
const id = Symbol('123')
const anotherId = Symbol('123')  //its symbol data type 

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "hulk", "dr"];
let myObj = {
    name: "sonu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3  // reference for further study 