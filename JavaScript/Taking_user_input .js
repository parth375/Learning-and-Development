// first step is install prompt library 
// npm install prompt-sync

const prompt=require("prompt-sync")();
// here require is used to import external modules 
// the require will return a function and the empty () are there to call the function this is called IIFE Immediately Invoked Function Expression (IIFE)
// Now the function return by require it's refrence is stored in variable prompt 

// Take string input from user

var c= prompt("Enter the name")

// Take integer imput from user

var b= parseInt(prompt("Enter the variable"))

console.log(c,b)