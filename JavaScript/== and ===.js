// == and ===

let num1=7 // int 
let num2="7" // string

if(num1==num2){
    console.log("True")
}
else{
    console.log("False")
}
if(num1===num2){
    console.log("true")
}
else{
    console.log("false")
}
// Here == will give True because while comparing it converts the datatype of one variable to the other variable like above either both will become
// int or both will become string and then compares

// === will give false because while comparing it also checks the datatype and does'nt convert it

// != and !==

let num3=9
let num4="9"
if(num3!=num4){
    console.log("false")
}
else{
    console.log("true")
}
if(num3!==num4){
    console.log("False")
}
else{
    console.log("True")
}
// // Same here also != will give True because while comparing it converts the datatype of one variable to the other variable like above either both will become
// // int or both will become string and then compares

// // === will give false because while comparing it also checks the datatype and does'nt convert it
