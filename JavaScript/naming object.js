// declaring an object

// Naming with Quotes

let obj={
    "name":"Warrior",
     "age":25
}

//Naming without Quotes

let obj2={
    name:"Agent",
    age:26
}


// The difference is if you are using with quotes syntax then you can name key any way you want for example:

let obj3={
    "345name":"Warrior",
     "age":25
}

  
// The above  will not give any error but if you use the same with the unquoted syntax it will give you a naming error, for example:

let obj4={
    345name:"Agent",
    age:26
}

//Output

console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)