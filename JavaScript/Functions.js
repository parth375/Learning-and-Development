//To make function

function function_name(){
    console.log(`I am function`)
}

function_name()// function calling

//FUnction Expression

const func=function(x,y){
    return x+y;
} 
let ans=func(4,5)
console.log(ans)

// Arrow Function

const sum=(a,b)=>{
  return a+b
}

console.log(sum(5,6))

// Hoisting

// In Javascript we can call function before its declaration

hello()

function hello(){
 console.log("HOIST")
}

// Also you can variable but only with var datatype not with let and const
 
console.log(yt) //undefined
var yt="hoist"
console.log(yt)

// let and const are block scope variables where as var is function scope variable:

// function example(){
//     {
//     var scope=1235
//     // console.log(scope)
//     }
//     console.log(scope) //this  will not print scope value
// }

// example()

// function example2(){
//     {
//     let scope2=1235
//     // console.log(scope)
//     }
//     console.log(scope2) // this will not print scope value
// }

// example2()

// default parameter

// This property of JS we can provide a default value to function paramters even if you don't pass tehm while calling the function
function default_param(a,b){
    return (a*b)
}
console.log(default_param(6))

// this will NAN as output as you have not passed b's value

function default_param2(a,b=5){ // here as you can see we have put a default value of b as 5 
    return (a*b)
}
console.log(default_param2(5))

// this will give output as 25

function default_param3(a,b=5){ 
    return (a*b)
}
console.log(default_param3(5,7))

// this will give output as 35 as both the values have been passed so default value will not be used

// rest paramters

// If you want to pass many parameters and you lazy to write every paramter name

function rs_param(a,b,c,...d){ // here d will be an array
    console.log(`${a},${b},${c},${d}`)
}
rs_param(12,3,4,5,9,6,7,8)

// Parameter Destrcuting
let obj4={
    'first_name':"Agam",
    'age':56
}
function rs_param({first_name,age}){ // destructing
    console.log(`${first_name},${age}`)
}
rs_param(obj4)

// Callback Functions- Function Calling function

function one(a,b){
    return a+b
}
function two(callback){
    console.log(`this function will call the callback function`)
    console.log(callback(4,5)) // here passing the parameter
}
two(one) // here we are just passing the function name

// function returing function

function three(){
    function four(a,b){
        return a*b
    }
    return four // returning function four
}
console.log(typeof(three())) //this will give function
 // to access it and call it 
 let sol=three()
 console.log(sol(6,7))