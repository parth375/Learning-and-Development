// let and var

// It's recommended to use let instead of var beacause:

var age=23
let age1=44

// we have declared two variable age , one with var and one with let and both will give me same output when printed

console.log(age)
console.log(age1)

// The problem ?


// let age1="Problem" // this line will throw and error because in let you cannot name two variable same
var age="NO Problem" // but in var there is no problem as var will let you define two varibale with same name 
                     //which can result in confusion if you are having a large codebas

// so it's better to use let instead of var to avoid confusion

const aadhar = 989839920 // const is used when you want to fixed value you cant change afterwards
 aadhar=2322 // this will throw and error as aadhar is assigned const datatype and once assigned const can't be changed 
 console.log(aadhar)